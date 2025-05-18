import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/blogs/get-blogs'
import { dev } from '$app/environment';
import { getPostsWip } from '$lib/wip-blogs/get-blogs-wip.js';
import { getTuts } from '$lib/tutorials/get-tutorials';
import { getTutsWip } from '$lib/wip-tutorials/get-tutorials-wip';

export async function load({ fetch, params }) {
    let articles = await Promise.all(
        getTuts().map(async (articleName) => {
            const post = await import(`$lib/tutorials/${articleName}/index.svx`);
            const metadata = post.metadata;
            const tagSplit = metadata.tags? String(metadata.tags).split(', ') : []
            const articleUrl = `/jbsite3/tutorials/${articleName}`
            const articleSlug = articleName

            return {
                metadata,
                tagSplit: tagSplit ?? [],
                articleUrl,
                articleSlug
            };
        })
    )

    if (dev) {
        const articlesWip = await Promise.all(
            getTutsWip().map(async (articleName) => {
                const post = await import(`$lib/wip-tutorials/${articleName}/index.svx`);
                const metadata = post.metadata;
                const tagSplit = String(metadata.tags).split(', ')
                const articleUrl = `/blogs/${articleName}`
                const articleSlug = articleName
    
                return {
                    metadata,
                    tagSplit,
                    articleUrl,
                    articleSlug
                };
            })
        )
        articles = articles.concat(articlesWip)
    }

    return { articles }
}