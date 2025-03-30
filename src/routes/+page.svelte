<script>
	import Changelogs from '$lib/components/changelogs.svelte';
	import Todo from '$lib/components/todo.svelte';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { isHome } from '$lib/stores/sidebarStore';
	import NowPlaying from '$lib/components/now-playing.svelte';
	import SiteButtons from '$lib/components/site-buttons.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import Nekocafe from '$lib/components/nekocafe.svelte';
	import { fromZonedTime, toZonedTime } from 'date-fns-tz';

	let { data } = $props();

	let sortedArticles = $state(
		[...data.articles]
			.sort((a, b) => {
				const dateA = new Date(a.metadata.published);
				const dateB = new Date(b.metadata.published);
				return dateA.getTime() - dateB.getTime();
			})
			.reverse()
	);

	let article = sortedArticles.map((v) => {
		let m = v.metadata;
		let u = v.articleUrl;

		return { ...m, articleUrl: u };
	})[0];

	console.log(article);

	let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;

	let dPubl = fromZonedTime(new Date(article.published), 'Asia/Manila');

	beforeNavigate(() => isHome.set(false));
	afterNavigate(() => isHome.set(true));
</script>

<MetaTags
	openGraph={{
		title: 'jbcarreon123',
		description: 'His little corner in the interwebs.'
	}}
/>

<svelte:head>
	<title>jbcarreon123</title>
</svelte:head>

<div class="w-full p-1.5">
	<div class="border-ctp-yellow mb-3 w-full border-2 p-1.5">
		<h1 class="headercolor mt-[-6px] pb-2 text-2xl">Warning</h1>
		<p>This site is rated 14+ and contains mild swearing (especially on rant posts).</p>
		<p>This page (the homepage) is fine to be viewed by anyone so you're safe.</p>
	</div>
	<div class="border-ctp-yellow mb-3 w-full border-2 border-dotted p-1.5">
		<h1 class="headercolor mt-[-6px] pb-2 text-2xl">Under construction!</h1>
		<p>
			This site is currently undergoing construction! Some pages might not work as expected... or
			just throw 404 entirely lol
		</p>
		<p>
			I made the site as mobile-friendly as possible, but some pages and things might not be the
			best experience on mobile. This site is PC-first, then mobile-second, so if you want the full
			experience, visit this on PC!
		</p>
	</div>
	<h1 class="headercolor pb-2 text-2xl">Hi there! I'm JB!</h1>
	<div class="flex flex-col gap-2">
		<p>And this is my little corner of the interwebs!</p>
		<p>I ramble about stuff, create stuff, and just lurk on some stuff.</p>
		<p>
			I'm a 16 year old Filipino that started programming in 2020 in the midst of the pandemic, and
			the day when I got my first PC, which is a Dell Vostro 270s (Core i3-2100, 4GB RAM, 7200RPM
			HDD at the time).
		</p>
		<p>
			My first project at that time is <a
				href="https://github.com/jbcarreon123/Win11CompChk"
				target="_blank"
				rel="noopener">Win11CompChk</a
			> which is a Windows 11 compatibility checker made in a batch file. Yes, it's slow but it is still
			usable. It's already deprecated, but you can still see the source code on my GitHub.
		</p>
		<p>
			The first version of this site has been built on 2024 in Express.js and I'm very proud of
			myself of how much I improved in the last couple of years since I started programming.
		</p>
		<p>
			Currently learning how to code in Rust, and developing a Discord bot using Rust to make myself
			learn quickly.
		</p>
	</div>
	<div class="m-0.5 mt-3 max-h-64 border-2 border-zinc-700 p-1.5">
		<h1>Latest post</h1>
		<a href={article.articleUrl} id="latest-post">
			<h1 id="article-title" class="title nf text-2xl md:text-3xl">{article.title}</h1>
			<span class="flex flex-row flex-wrap text-sm">
				<p id="author">by jbcarreon123</p>
				<p>•</p>
				<p>published {toZonedTime(dPubl, ltz).toLocaleDateString()}</p>
				<p>•</p>
				<p>in {article.tags}</p>
				<p>•</p>
				<p>{article.wordCount} words</p>
				<p>•</p>
				<p>{article.readingTime}</p>
			</span>
			<p class="description">{article.description}</p>
		</a>
	</div>
	<div class="m-0.5 mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
		<div class="max-h-64 w-full overflow-y-scroll border-2 border-zinc-700 p-1.5">
			<Changelogs />
		</div>

		<div class="max-h-64 w-full overflow-y-scroll border-2 border-zinc-700 p-1.5">
			<Todo />
		</div>

		<div class="w-full border-2 border-zinc-700 p-1.5">
			<Nekocafe />

			<div id="statuscafe">
				<div id="statuscafe-username" class="headercolor"></div>
				<div id="statuscafe-content" class="ml-1 border-l-2 border-zinc-500 pt-0.5 pl-1.5"></div>
				<script src="https://status.cafe/current-status.js?name=jbcarreon123" defer></script>
			</div>
		</div>

		<div class="w-full border-2 border-zinc-700 p-1.5">
			<NowPlaying />
		</div>
	</div>
</div>

<style>
	#latest-post {
		span {
			p {
				padding: 0 5px;
			}
		}

		h1,
		> p {
			padding-left: 5px;
		}
	}
</style>
