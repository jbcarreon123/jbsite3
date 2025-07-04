<script lang="ts">
	export let data;
	import { onMount } from 'svelte';
	import { isBlog, blogToc } from '$lib/stores/blogTocStore.js';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import { MetaTags } from 'svelte-meta-tags';
	import { fromZonedTime, toZonedTime } from 'date-fns-tz';
	import CommentBox from '$lib/components/comment-box.svelte';

	import autoAnimate from '@formkit/auto-animate';
	import { browser } from '$app/environment';
	import ImageViewer from '$lib/components/image-viewer.svelte';
	import BlogToc from '$lib/components/blog-toc.svelte';

	let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;

	let dPubl = fromZonedTime(new Date(data.published), 'Asia/Manila');

	beforeNavigate((n) => {
		isBlog.set(false)
		blogToc.set([])
	})

	afterNavigate(() => {
		const links = document.querySelectorAll('a[href^="#"]');
		const slugs: any[] = []

		links.forEach((link) => {
			if (link.parentElement?.parentElement?.tagName !== "BLOCKQUOTE") {
				slugs.push({
					'element': link.parentElement?.tagName,
					'slug': link.getAttribute('href'),
					'name': link.parentElement?.innerText
				})
			}
		});

		isBlog.set(true)
		blogToc.set(slugs)
	});

	let imgPath: string = '';
	let imgAlt: string = '';
	onMount(() => {
		isBlog.set(false)
		blogToc.set([])

		if (browser) {
			document.getElementsByTagName('article')[0].querySelectorAll('img').forEach((v) => {
				v.onclick = (ev) => {
					ev.preventDefault()
					console.log(ev)
					if (ev.button === 0) {
						imgPath = v.src
						imgAlt = v.alt
					}
				}

				console.log(v)
			})
		}
	})
</script>

<MetaTags
	openGraph={{
		title: data.title,
		description: data.description,
		url: `https://jbcarreon123.nekoweb.org/posts/${data.slug}`,
		siteName: "jb's posts",
		type: 'article'
	}}
/>

<svelte:head>
	<meta name="description" content={data.description}>
	<title>{data.title}</title>
</svelte:head>

<ImageViewer bind:imagePath={imgPath} alt={imgAlt} />

<article aria-labelledby="article-title">
	<header>
		<h1 id="article-title" class="title nf text-2xl md:text-3xl">{data.title}</h1>
		<span class="text-sm flex flex-row flex-wrap">
			<p id="author">by jbcarreon123</p>
			<p>•</p>
			<p>published {toZonedTime(dPubl, ltz).toLocaleDateString()}</p>
			<p>•</p>
			<p>in {data.tagSplit.join(', ')}</p>
			<p>•</p>
			<p>{data.wordCount} words</p>
			<p>•</p>
			<p>{data.readingTime}</p>
		</span>
		<p class="description">{data.description}</p>
	</header>
	<div class="p-1" use:autoAnimate>
        <BlogToc />
    </div>
	<div class="content mx-2 pt-1">
		<svelte:component this={data.content} />
	</div>
</article>
<div>
	<script type="text/javascript" src="/lib/purify.min.js"></script>
	<script src="/lib/showdown.min.js"></script>
	<script src="/lib/comment-widget.js?post={data.slug}" defer></script>
	<div id="c_widget" use:autoAnimate></div>
</div>

<style lang="postcss">
	header {
		span {
			p {
				padding: 0 5px;
			}	
		}

		h1, > p {
			padding-left: 5px;
		}

		padding-bottom: 6px;
		border-bottom: 1px solid rgba(var(--ctp-overlay0));
	}

	.content :global {
		p {
			padding: 6px 0px;
		}

		img {
			max-width: 350px;
		}
	}

	* :global {
		

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			color: rgba(var(--ctp-blue));
		}

		h1 a::before,
		h2 a::before,
		h3 a::before,
		h4 a::before,
		h5 a::before,
		h6 a::before {
			content: '# ';
			font-size: large;
		}

		h1:not(.nf):not(blockquote *) {
			border-bottom: 1px rgb(var(--ctp-overlay0)) solid;
			margin-bottom: 8px;
			padding-bottom: 5px;
			padding-top: 15px;
		}

		h2:not(.nf):not(blockquote *) {
			margin-top: 15px;
		}

		h3:not(.nf):not(blockquote *) {
			margin-top: 15px;
		}

		h4:not(.nf):not(blockquote *) {
			margin-top: 15px;
		}

		blockquote:not(.nf) {
			border-left: 3px rgba(var(--ctp-blue)) solid;
			margin: 8px 0;
			padding: 5px 0;
			padding-left: 16px;
		}

		figcaption {
			font-size: 0.75rem;
		}

		ol,
		ul,
		menu {
			list-style: unset;
			margin: unset;
			padding: unset;
			padding-left: 24px;
		}

		.shiki.has-diff .diff.remove {
			background-color: rgba(var(--ctp-red), 0.35);
			padding: 2px;
		}

		.shiki.has-diff .diff.remove::before {
			content: '- ';
			color: rgba(var(--ctp-red));
			padding: 2px;
		}

		.shiki.has-diff .diff.add {
			background-color: rgba(var(--ctp-green), 0.35);
			padding: 2px;
		}

		.shiki.has-diff .diff.add::before {
			content: '+ ';
			color: rgba(var(--ctp-green));
			padding: 2px;
		}
	}
</style>
