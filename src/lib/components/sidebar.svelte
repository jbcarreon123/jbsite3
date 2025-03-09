<script lang="ts">
	import SiteButtons from '$lib/components/site-buttons.svelte';
	import Timezones from '$lib/components/timezones.svelte';
	import NowPlaying, { preload } from '$lib/components/now-playing.svelte';
	import Preferences from '$lib/components/preferences.svelte';
	import Stats from '$lib/components/stats.svelte';
	import Webrings from '$lib/components/webrings.svelte';
	import BlogToc from '$lib/components/blog-toc.svelte';

	import { browser } from '$app/environment';
	import autoAnimate from '@formkit/auto-animate';

	let nklFrame: HTMLIFrameElement | undefined = $state();
	let nklText: HTMLParagraphElement | undefined = $state();

	function nklLoad() {
		nklFrame.style.maxHeight = 'max-content';
		nklText.classList.add('hidden');
	}

	import { isHome } from '$lib/stores/sidebarStore';
</script>

{#if typeof window !== 'undefined'}
	<div class="w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full" use:autoAnimate>
		<Timezones />
	</div>
	{#if !$isHome}
		<div class="w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full">
			<div id="statuscafe">
				<div id="statuscafe-username" class="headercolor"></div>
				<div id="statuscafe-content" class="ml-1 border-l-2 border-zinc-500 pt-0.5 pl-1.5"></div>
				<script src="https://status.cafe/current-status.js?name=jbcarreon123" defer></script>
			</div>
		</div>
		<div class="w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full" use:autoAnimate>
			<NowPlaying />
		</div>
	{/if}
	<div class="w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full" use:autoAnimate>
		<Stats />
	</div>
{:else}
	<div class="w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full">
		JavaScript is disabled. Some site functionality might not work but core features should work.
	</div>
{/if}

{#if typeof window !== 'undefined'}
	<div class="mt-1.5 w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full">
		<Preferences />
	</div>

	<div class="mt-1.5 w-full p-1.5 max-w-full sm:max-w-1/2 md:max-w-full" use:autoAnimate>
		<Webrings />
	</div>
{/if}