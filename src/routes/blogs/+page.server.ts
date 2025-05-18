import { json, redirect } from '@sveltejs/kit'
import { getPosts } from '$lib/blogs/get-blogs'
import { dev } from '$app/environment';
import { getPostsWip } from '$lib/wip-blogs/get-blogs-wip.js';

export async function load({ fetch, params }) {
    redirect(302, '/posts')
}