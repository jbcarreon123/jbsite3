export const prerender = true;

import type { RequestHandler } from './$types';
import { getPosts } from '$lib/blogs/get-blogs';
import markdownit from 'markdown-it';
import { readFile, readFileSync } from 'node:fs';
import { miniRambles } from '$lib/changelogs-todo';

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

    let articles = await Promise.all(
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

    var chng = miniRambles.map((v) => {
        let metadata = {
            title: "mR: " + v.title,
            description: v.content.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
            published: v.date,
            dateStr: 'jbsite-mini-ramble-' + v.date.toLocaleString().replaceAll('/', '-').replaceAll(',', '').replaceAll(' ', '-').replaceAll(':', '-').toLowerCase()
        };

        console.log(v)
        
        return {
            metadata,
            tagSplit: [''],
            articleUrl: '/',
            content: ''
        }
    });

    articles = articles.concat(chng)

    const posts = [...articles].sort((a, b) => {
        const dateA = new Date(a.metadata.published);
        const dateB = new Date(b.metadata.published);
        return dateB.getTime() - dateA.getTime(); // Sort newest first
    }).slice(0, 5);

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>jb's posts</title>
    <description>jb's personal rambling about stuff</description>
    <link>https://jbcarreon123.nekoweb.org/</link>
    <atom:link href="https://jbcarreon123.nekoweb.org/blogs/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>SvelteKit RSS Generator</generator>
    ${posts.map(post => `
    <item>
      <title>${post.metadata.title}</title>
      <description>${post.metadata.description}</description>
      <link>https://jbcarreon123.nekoweb.org${post.articleUrl}</link>
      <guid>${(post.content)? `${post.articleUrl.split('/')[post.articleUrl.split('/').length - 1]}` : `${post.metadata.dateStr}`}</guid>
      <pubDate>${new Date(post.metadata.published).toUTCString()}</pubDate>
      ${(post.content)? `<content:encoded><![CDATA[${post.content}]]></content:encoded>` : ''}
    </item>`).join('')}
  </channel>
</rss>`;


    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
};