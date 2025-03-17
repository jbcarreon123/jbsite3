<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { browser } from '$app/environment';
	let { children, data } = $props();

	import { isBlog, blogToc } from '$lib/stores/blogTocStore';

	import Background from '$lib/components/background.svelte';

	import Oneko from '$lib/oneko/oneko.svelte';

	import autoAnimate from '@formkit/auto-animate';
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { MetaTags } from 'svelte-meta-tags';
	import LeftSidebar from '$lib/components/left-sidebar.svelte';

	let skipLink: HTMLLinkElement = $state();
	let showSkipLink = $state(false);
	let hasInteracted = false;

	function handleTab(event) {
		if (event.key === 'Tab' && showSkipLink !== true && hasInteracted !== true) {
			showSkipLink = true;

			setTimeout(function () {
				skipLink.focus();
			}, 250);

			console.log(event.key);
		}
	}

	function handleInteraction(event) {
		if (event.key !== 'Tab') {
			showSkipLink = false;
			hasInteracted = true;
		}
	}

	let enableOneko = $state(false);

	if (browser) {
		const configCookie = localStorage.getItem('config');
		if (configCookie) {
			try {
				const config = JSON.parse(configCookie);
				enableOneko = config.enableOneko;
				console.log(config);
			} catch (error) {
				console.error('Error parsing config cookie:', error);
			}
		}
	}

	afterNavigate(() => (hasInteracted = false));

	function handleSkip() {
		let el = document.getElementById('page-content');
		if (el) {
			el.scrollIntoView();
			el.focus();
			el.click();
		}
		showSkipLink = false;
		hasInteracted = true;
	}

	function setupListeners() {
		if (browser) {
			window.addEventListener('scroll', handleInteraction);
			window.addEventListener('mousedown', handleInteraction);
			window.addEventListener('keydown', handleInteraction);
			window.addEventListener('touchstart', handleInteraction);
		}
	}

	function removeListeners() {
		if (browser) {
			window.removeEventListener('scroll', handleInteraction);
			window.removeEventListener('mousedown', handleInteraction);
			window.removeEventListener('keydown', handleInteraction);
			window.removeEventListener('touchstart', handleInteraction);
		}
	}

	let imgHover: string | undefined = $state(undefined)
	function mouseMove(ev) {
		let span = document.querySelector('#hoverSpan');
		span.style.display = 'block';
		if ((span?.scrollWidth + ev.clientX + 15) >= document.body.clientWidth){
			span.style.right = `${(document.body.clientWidth - ev.clientX + 10)}px`;
			span.style.left = ''
		} else {
			span.style.left = `${ev.clientX + 10}px`;
			span.style.right = ''
		}
		span.style.top = `${ev.clientY - span?.clientHeight}px`;

		let el = document.querySelector('img:hover') ?? document.querySelector('a:hover');
		imgHover = el.dataset.hoverContent
	}

	function mouseOut(ev) {
		document.querySelectorAll('#hoverSpan').forEach((e) => {
			e.style.display = 'none';
		});
	}

	onMount(() => {
		setInterval(function() {
			document.querySelectorAll('[data-hover]').forEach((el) => {
				if (!el.dataset.hoverContent) {
					el?.removeEventListener('mousemove', mouseMove);
					el?.removeEventListener('mouseout', mouseOut);
					el.dataset.hoverContent = el.dataset.hover;
					el.dataset.hover = '';
					el.title = '';
					el?.addEventListener('mousemove', mouseMove);
					el?.addEventListener('mouseout', mouseOut);
				}
			})
			document.querySelectorAll('img').forEach((el) => {
				if (!el.dataset.hoverContent) {
					el?.removeEventListener('mousemove', mouseMove);
					el?.removeEventListener('mouseout', mouseOut);
					let name: string = `${(el.title) ? `${el?.title.replaceAll(': ', ':<br />')}<br />` : `${el?.alt.replaceAll(': ', ':<br />')}<br />`}`
					el.dataset.hoverContent = `${name!=="<br />"? `<span class="el">${name}</span>` : ''}${el.parentElement?.hasAttribute('href')? `<span class="link">${el.parentElement.href}</span>` : ''}`;
					el.title = '';
					el?.addEventListener('mousemove', mouseMove);
					el?.addEventListener('mouseout', mouseOut);
				}
			});
			document.querySelectorAll('a:not(:has(img))').forEach((el) => {
				if (!el.dataset.hoverContent && !el.href.includes(window.location.hostname)) {
					el?.removeEventListener('mousemove', mouseMove);
					el?.removeEventListener('mouseout', mouseOut);
					el.dataset.hoverContent = `<span class="link">${el.href}</span>`;
					el?.addEventListener('mousemove', mouseMove);
					el?.addEventListener('mouseout', mouseOut);
				}
			})
		}, 500)

		document.querySelectorAll('[data-hover]').forEach((el) => {
			if (!el.dataset.hoverContent) {
				el?.removeEventListener('mousemove', mouseMove);
				el?.removeEventListener('mouseout', mouseOut);
				el.dataset.hoverContent = el.dataset.hover;
				el.dataset.hover = '';
				el.title = '';
				el?.addEventListener('mousemove', mouseMove);
				el?.addEventListener('mouseout', mouseOut);
			}
		})
		document.querySelectorAll('img').forEach((el) => {
			if (!el.dataset.hoverContent) {
				el?.removeEventListener('mousemove', mouseMove);
				el?.removeEventListener('mouseout', mouseOut);
				let name: string = `${(el.title) ? `${el?.title.replaceAll(': ', ':<br />')}<br />` : `${el?.alt.replaceAll(': ', ':<br />')}<br />`}`
				el.dataset.hoverContent = `${name!=="<br />"? `<span class="el">${name}</span>` : ''}${el.parentElement?.hasAttribute('href')? `<span class="link">${el.parentElement.href}</span>` : ''}`;
				el.title = '';
				el?.addEventListener('mousemove', mouseMove);
				el?.addEventListener('mouseout', mouseOut);
			}
		});
		document.querySelectorAll('a:not(:has(img))').forEach((el) => {
			if (!el.dataset.hoverContent && !el.href.includes(window.location.hostname)) {
				el?.removeEventListener('mousemove', mouseMove);
				el?.removeEventListener('mouseout', mouseOut);
				el.dataset.hoverContent = `<span class="link">${el.href}</span>`;
				el?.addEventListener('mousemove', mouseMove);
				el?.addEventListener('mouseout', mouseOut);
			}
		})

		setupListeners();
	});

	onDestroy(() => {
		removeListeners();
	});
</script>

<MetaTags
	openGraph={{
		siteName: `jb's site: ${data.currentPage}`,
		type: 'website'
	}}
/>

<svelte:window on:keydown={handleTab} />

<div use:autoAnimate>
	{#if showSkipLink}
		<a
			href="#page-content"
			bind:this={skipLink}
			class="skip-link"
			onclick={handleSkip}
			onkeydown={(event) => {
				if (event.key === 'Enter') handleSkip();
			}}
		>
			Go to content
		</a>
	{/if}
</div>

<Background />

{#if enableOneko}
	<div class="print:hidden">
		<Oneko />
	</div>
{/if}

<span id="hoverSpan" style="position:fixed;display:none;">
	{@html imgHover}
</span>

<style lang="postcss">
	@media (width >= 52rem) {
		.grd {
			grid-template-columns: 80% 20%;
		}
	}
</style>

<div id="document">
<Header />
<div class="grd grid grid-cols-1 m-2.5">
	<main class="m-0.5 px-2 w-full pb-3 md:flex-3/4" id="page-content" use:autoAnimate>
		{@render children()}
	</main>
	<aside
		class="print:hidden m-0.5 flex w-full flex-wrap border-2 border-ctp-overlay0 pb-3 md:flex-1/4 md:flex-col"
		use:autoAnimate
	>
		<Sidebar />
	</aside>
</div>
<footer class="print:hidden">
	<Footer />
</footer>
</div>