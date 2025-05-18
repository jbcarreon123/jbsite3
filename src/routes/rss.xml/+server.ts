export const prerender = true;

import type { RequestHandler } from './$types';
import { getPosts } from '$lib/blogs/get-blogs';
import markdownit from 'markdown-it';
import { readFile, readFileSync } from 'node:fs';
import { fromZonedTime } from 'date-fns-tz';

function rmIncompTags(text: string): string {
    const componentRegex = /<[A-Z][a-zA-Z0-9]*(\s[^>]*)*(\/>|>)/g;
    const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const frontmatterRegex = /^---[\s\S]*?---|^(\+\+\+)([\s\S]*?)\1/g;

    return text.replace(componentRegex, '[Svelte components omitted]')
            .replace(scriptRegex, '')
            .replace(frontmatterRegex, '')
}

export const GET: RequestHandler = async () => {
    const md = markdownit()

    const articles = await Promise.all(
        getPosts().map(async (articleName) => {
            const post = await import(`$lib/blogs/${articleName}/index.svx`);
            const metadata = post.metadata;
            const content = md.render(rmIncompTags(readFileSync(`src/lib/blogs/${articleName}/index.svx`, 'utf-8')));
            const tagSplit = String(metadata.tags).split(', ');
            const articleUrl = `/blogs/${articleName}`;

            return {
                metadata,
                tagSplit,
                articleUrl,
                content
            };
        })
    );

    const posts = [...articles].sort((a, b) => {
        const dateA = new Date(a.metadata.published);
        const dateB = new Date(b.metadata.published);
        return dateB.getTime() - dateA.getTime(); // Sort newest first
    });

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>jb's posts</title>
    <description>jb's personal rambling about stuff</description>
    <link>https://jbcarreon123.nekoweb.org/</link>
    <atom:link href="https://jbcarreon123.nekoweb.org/blogs/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toISOString()}</lastBuildDate>
    <generator>SvelteKit RSS Generator</generator>
    ${posts.map(post => `
    <item>
      <title>${post.metadata.title}</title>
      ${(post.metadata.description)? `<description>${post.metadata.description}</description>` : ''}
      <link>https://jbcarreon123.nekoweb.org${post.articleUrl}</link>
      <guid isPermaLink="true">https://jbcarreon123.nekoweb.org${post.articleUrl}</guid>
      <pubDate>${fromZonedTime(new Date(post.metadata.published)).toISOString()}</pubDate>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`;


    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
};