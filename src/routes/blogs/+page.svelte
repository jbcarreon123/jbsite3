<script>
	import autoAnimate from '@formkit/auto-animate';
	import { fromZonedTime, toZonedTime } from 'date-fns-tz';

	let { data } = $props();

	let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;

	let sortedArticles = $state(
		[...data.articles]
			.sort((a, b) => {
				const dateA = new Date(a.metadata.published);
				const dateB = new Date(b.metadata.published);
				return dateA.getTime() - dateB.getTime();
			})
			.reverse()
	);

	let somethingFound = $state(true);
	function searchArticle() {
		/**
		 * @type { HTMLInputElement | null }
		 */
		const search = document.querySelector('input#search');
		if (search && search.value) {
			sortedArticles = [...data.articles]
				.sort((a, b) => {
					const dateA = new Date(a.metadata.published);
					const dateB = new Date(b.metadata.published);
					return dateA.getTime() - dateB.getTime();
				})
				.reverse();
			sortedArticles = sortedArticles.filter((v) => {
				return v.metadata.title.toLowerCase().includes(search.value.toLowerCase());
			});
			somethingFound = sortedArticles.length > 0;
		} else {
			sortedArticles = [...data.articles]
				.sort((a, b) => {
					const dateA = new Date(a.metadata.published);
					const dateB = new Date(b.metadata.published);
					return dateA.getTime() - dateB.getTime();
				})
				.reverse();
			console.log(sortedArticles)
			somethingFound = sortedArticles.length > 0;
		}
	}
</script>

<svelte:head>
	<title>Jb's Posts</title>
</svelte:head>

<div class="flex flex-row flex-wrap items-end justify-between gap-4">
	<div>
		<h1 class="title headercolor text-2xl leading-snug">Posts</h1>
		<a href="https://jbcarreon123.nekoweb.org/rss.xml" class="pb-0.5">Get the RSS feed</a>
	</div>
	<div class="max-sm:w-full">
		<input
			type="text"
			id="search"
			class="border max-sm:w-full"
			on:change={searchArticle}
			placeholder="Search..."
		/>
	</div>
</div>
<div id="nothing" class="pt-2" style="display:none;">Nothing found :(</div>
<ul id="article" class="flex flex-wrap gap-3" use:autoAnimate>
	{#key sortedArticles}
		{#if !somethingFound}
		<p>Nothing found :(</p>
		{/if}
		{#each sortedArticles as article}
			<li class="article-card max-sm:w-full">
				<div class="w-full p-2 sm:max-w-2xs" role="article" id="{article.articleSlug}-articleitem">
					<div
						id="header-content"
						class="border-b-ctp-overlay0 flex w-full max-w-full border-b-2 pb-2"
					>
						<div>
							<a
								href={article.articleUrl}
								id="{article.articleSlug}-title"
								aria-describedby="{article.articleSlug}-description {article.articleSlug}-tags"
								title={article.metadata.description}
							>
								<div>
									<h2
										id="article-title"
										class="nm title max-w-[17rem] overflow-hidden text-nowrap text-ellipsis"
									>
										{article.metadata.title}
									</h2>
								</div>
							</a>
							<div class="flex flex-wrap gap-2" aria-hidden="true">
								{#each article.tagSplit.slice(0, 5) as tag}
									<div class="bg-ctp-base w-fit rounded px-0.5 text-[12px]">
										{tag}
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div class="w-full pt-2" id="{article.articleSlug}-description">
						{article.metadata.description}
					</div>
					<div class="sr-only" id="{article.articleSlug}-tags">
						Tags: {article.tagSplit.join(', ')}
					</div>
				</div>
			</li>
		{/each}
	{/key}
</ul>
