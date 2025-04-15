import { dev } from "$app/environment";

export async function load({ params }) {
	try {
		const post = await import(`$lib/tutorials/${params.slug.replace('.svx', '')}/index.svx`);
		const { title, description, category } = post.metadata;
		const content = post.default;

		const slug = params.slug;

		return {
			slug,
			category,
			content,
			title,
			description
		};
	} catch (e) {
		console.error(e)

		if (dev) {
			const post = await import(`$lib/wip-tutorials/${params.slug.replace('.svx', '')}/index.svx`);
			const { title, description, category } = post.metadata;
			const content = post.default;

			const slug = params.slug;

			return {
				slug,
				category,
				content,
				title,
				description
			};
		}

		throw e
	}
}