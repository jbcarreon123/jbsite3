import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/blogs/get-blogs'
import { dev } from '$app/environment';
import { getPostsWip } from '$lib/wip-blogs/get-blogs-wip.js';
import { getUtils } from '$lib/utils/get-utils.js';

export async function load({ fetch, params }) {
    let utils = await Promise.all(
        getUtils().map(async (utili) => {
            const util = await import(`$lib/utils/${utili}/metadata.ts`);
            const { utilName, utilDesc, utilCate } = util;

            console.log(util)

            return {
                utilName,
                utilDesc,
                utilCate,
                utilSlug: utili
            };
        })
    )

    console.log(utils)

    return { utils }
}