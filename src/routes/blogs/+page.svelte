<script>
	import { fromZonedTime, toZonedTime } from 'date-fns-tz';

	export let data;

    let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const sortedArticles = [...data.articles].sort((a, b) => {
        const dateA = new Date(a.metadata.published);
        const dateB = new Date(b.metadata.published);
        return dateA.getTime() - dateB.getTime(); // Compare timestamps
    }).reverse().slice(0, 10);
</script>

<svelte:head>
    <title>Jb's Posts</title>
</svelte:head>

<h1 class="title text-2xl leading-snug headercolor">Posts</h1>
<a href="https://jbcarreon123.nekoweb.org/rss.xml" class="pb-2">Get the RSS feed</a>
<ul>
    {#each sortedArticles as article}
    <li>
		<div class="w-full max-w-full p-2" role="article" id="{article.articleSlug}-articleitem">
			<div id="header-content" class="flex w-full border-b-2 border-b-ctp-overlay0 pb-2 max-w-full justify-between">
				<a href={article.articleUrl} id="{article.articleSlug}-title" aria-describedby="{article.articleSlug}-description {article.articleSlug}-tags" title="{article.metadata.description}" class="self-end overflow-hidden pr-3">
					<div>
						<h2 class="nm title overflow-hidden text-nowrap text-ellipsis">{article.metadata.title}</h2>
					</div>
				</a>
				<div class="justify-items-end self-end w-max">
					<p class="text-right">
						<time datetime={new Date(article.metadata.published)}>
							{toZonedTime(fromZonedTime(new Date(article.metadata.published), 'Asia/Manila'), ltz).toLocaleDateString()}
						</time>
					</p>
					<div class="grid grid-flow-col justify-end gap-1 text-right text-nowrap" aria-hidden="true">
						{#each article.tagSplit.slice(0, 5) as tag}
							<div class="mono w-fit rounded bg-ctp-base px-0.5 text-[12px]">
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