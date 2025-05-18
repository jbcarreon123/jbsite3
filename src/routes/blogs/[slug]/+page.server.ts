import { dev } from "$app/environment";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
	redirect(302, `/posts/${params.slug}`)
}