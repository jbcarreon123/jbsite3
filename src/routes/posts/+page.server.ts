import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/blogs/get-blogs'
import { dev } from '$app/environment';
import { getPostsWip } from '$lib/wip-blogs/get-blogs-wip.js';

export async function load({ fetch, params }) {
    let articles = await Promise.all(
        getPosts().map(async (articleName) => {
            const post = await import(`$lib/blogs/${articleName}/index.svx`);
            const metadata = post.metadata;
            const tagSplit = metadata.tags? String(metadata.tags).split(', ') : []
            const articleUrl = `/posts/${articleName}`
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
            getPostsWip().map(async (articleName) => {
                const post = await import(`$lib/wip-blogs/${articleName}/index.svx`);
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