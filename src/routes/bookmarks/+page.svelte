<script>
	import { bookmarks } from '$lib/bookmarks/bookmarks';
	import { MetaTags } from 'svelte-meta-tags';

	function groupArrayByCategory(arr) {
		const result = {};
		arr.forEach((item) => {
			const category = item.category;

			if (!result[category]) {
				result[category] = {
					name: category,
					bookmarks: []
				};
			}

			result[category].bookmarks.push(item);
		});
		return Object.values(result);
	}

	const bookmarkCategories = groupArrayByCategory(bookmarks);
</script>

<svelte:head>
	<title>Bookmarks</title>
</svelte:head>

<MetaTags
	openGraph={{
		title: "Bookmarks",
		type: 'website',
        description: `Contains some helpful links that you might want to check out!`
	}}
/>

<h1 class="headercolor text-4xl leading-snug">Bookmarks</h1>
<p>Here's some helpful links that you might want to check out!</p>
<p id="neocities-scripts">(note 1) Won't work on free Neocities accounts created since 2022, unless a workaround was done</p>

{#each bookmarkCategories as category}
	<div class="pt-2" id={category.name.toLowerCase().replaceAll(' ', '-')}>
		<h1>{category.name}</h1>
		<div class="flex flex-wrap gap-3">
			{#each category.bookmarks as bookmark}
				<div class="w-full sm:w-2xs">
					<h2>{@html bookmark.name}</h2>
					<p>
						{@html bookmark.description}
						<i
							><small>{bookmark.recommended ? ' (recommended!)' : ''}</small><small
								>{bookmark.comingSoon ? ' (coming soon!)' : ''}</small
							><small class="pl-1 text-ctp-yellow"
								>{#if bookmark.warning}({@html bookmark.warning}){/if}</small
							></i
						>
					</p>
					{#if typeof bookmark.url === 'string' && bookmark.url}
						<a href={bookmark.url} target="_blank">Link</a>
					{:else if typeof bookmark.url === 'object'}
						<div class="flex flex-row flex-wrap">
							{#each bookmark.url as url}
								<a class="mx-1" href={url.url} target="_blank">{url.name}</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/each}
