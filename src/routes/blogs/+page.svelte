<script>
	import { fromZonedTime, toZonedTime } from 'date-fns-tz';

	export let data;

    let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const sortedArticles = [...data.articles].sort((a, b) => {
        const dateA = new Date(a.metadata.published);
        const dateB = new Date(b.metadata.published);
        return dateA.getTime() - dateB.getTime(); // Compare timestamps
    }).reverse();

	function searchArticle() {
		/**
		 * @type { HTMLInputElement | null }
		 */
		const search = document.querySelector('input#search');
		if (search) {
			console.log(search.value)
			let somethingFound = false;
			document.querySelectorAll('#article .article-card').forEach((el) => {
				/** @type { HTMLHeadingElement | null } */
				let title = el.querySelector('#article-title');

				if (title) {
					if (!title.innerText.toLowerCase().includes(search.value.toLowerCase())) {
						el.style.display = 'none';
					} else {
						el.style.display = 'block';
						somethingFound = true;
					}
				}
			})
			if (!somethingFound) {
				document.querySelector('#nothing').style.display = 'block'
			} else {
				document.querySelector('#nothing').style.display = 'none'
			}
		} else {
			document.querySelectorAll('#article .article-card').forEach((el) => {
				el.style.display = 'block';
			})
		}
	}
</script>

<svelte:head>
    <title>Jb's Posts</title>
</svelte:head>

<div class="flex flex-row flex-wrap gap-4 items-end justify-between">
	<div>
		<h1 class="title text-2xl leading-snug headercolor">Posts</h1>
		<a href="https://jbcarreon123.nekoweb.org/rss.xml" class="pb-0.5">Get the RSS feed</a>
	</div>
	<div class="max-sm:w-full">
		<input type="text" id="search" class="border max-sm:w-full" on:change={searchArticle} placeholder="Search...">
	</div>
</div>
<div id="nothing" class="pt-2" style="display:none;">Nothing found :(</div>
<ul id="article" class="flex flex-wrap gap-3">
    {#each sortedArticles as article}
    <li class="article-card max-sm:w-full">
		<div class="w-full sm:max-w-2xs p-2" role="article" id="{article.articleSlug}-articleitem">
			<div id="header-content" class="flex w-full border-b-2 border-b-ctp-overlay0 pb-2 max-w-full">
				<div>
					<a href={article.articleUrl} id="{article.articleSlug}-title" aria-describedby="{article.articleSlug}-description {article.articleSlug}-tags" title="{article.metadata.description}">
						<div>
							<h2 id="article-title" class="nm title overflow-hidden max-w-[17rem] text-nowrap text-ellipsis">{article.metadata.title}</h2>
						</div>
					</a>
					<div class="flex flex-wrap gap-2" aria-hidden="true">
						{#each article.tagSplit.slice(0, 5) as tag}
							<div class="w-fit rounded bg-ctp-base px-0.5 text-[12px]">
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
				Tags: {article.tagSplit.join(", ")}
			</div>
		</div>
	</li>
    {/each}
</ul>