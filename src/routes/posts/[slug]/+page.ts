import { dev } from "$app/environment";

export async function load({ params }) {
	try {
		const post = await import(`$lib/blogs/${params.slug.replace('.svx', '')}/index.svx`);
		const { title, published, image, tags, description, wordCount, readingTime } = post.metadata;
		const content = post.default;
		const tagSplit = String(tags).split(', ');
		const slug = params.slug;

		console.log(post)

		return {
			slug,
			content,
			title,
			published,
			image,
			tagSplit,
			description,
			wordCount,
			readingTime
		};
	} catch (e) {
		console.error(e)

		if (dev) {
			const post = await import(`$lib/wip-blogs/${params.slug.replace('.svx', '')}/index.svx`);
			const { title, published, image, tags, description } = post.metadata;
			const content = post.default;
			const tagSplit = String(tags).split(', ');
			const slug = params.slug;

			return {
				slug,
				content,
				title,
				published,
				image,
				tagSplit,
				description
			};
		}

		throw e
	}
}