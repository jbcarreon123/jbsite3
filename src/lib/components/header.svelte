<script>
	import { onMount } from "svelte";

	onMount(() => {
		const offlineDialog = document.getElementById('offline');
		function updateOfflineStatus() {
			if (!navigator.onLine) {
				offlineDialog.style.display = 'block';
			} else {
				offlineDialog.style.display = 'none';
			}
		}
		updateOfflineStatus();
		window.addEventListener('online', updateOfflineStatus);
		window.addEventListener('offline', updateOfflineStatus);
	})
</script>

<header class="print:hidden">
	<div id="offline" style="display:none" class="border-2 border-ctp-yellow p-1.5 m-5">
		<p>You're offline. jbSite will load but some pages might not load correctly (or just throw 500 Internal Error)</p>
	</div>

	<div class="grid grid-cols-1 justify-items-center pt-2 pb-8">
		<a href="/jbsite3/" class="nocol" aria-label="jbcarreon123">
			<div
				class="h a headercolor headerfont max mb-[-46px] flex h-20 flex-row text-5xl font-semibold sm:mb-0 sm:text-7xl"
			>
				<div style="--n:-1500ms">j</div>
				<div style="--n:-1400ms">b</div>
				<div style="--n:-1300ms">c</div>
				<div style="--n:-1200ms">a</div>
				<div style="--n:-1100ms">r</div>
				<div style="--n:-1000ms">r</div>
				<div style="--n:-900ms">e</div>
				<div style="--n:-800ms">o</div>
				<div style="--n:-700ms">n</div>
				<div style="--n:-600ms">1</div>
				<div style="--n:-500ms">2</div>
				<div style="--n:-400ms">3</div>
			</div>
		</a>
	</div>

	<nav>
		<div class="m-2.5 border-b-2 border-zinc-300 p-1.5 pb-2 dark:border-zinc-700">
			<div
				class="flex w-[100%] flex-auto flex-wrap justify-center gap-5"
				data-sveltekit-preload-data="hover"
			>
				<a href="/jbsite3/">Home</a>
				<a href="/jbsite3/posts">Posts</a>
				<a href="/jbsite3/contact">Contact</a>
				<a href="/jbsite3/projects">Projects</a>
				<a href="/jbsite3/bookmarks">Bookmarks</a>
				<a href="/jbsite3/links">Links</a>
				<a href="/jbsite3/utils">Utils</a>
				<a href="/jbsite3/tutorials">Tutorials</a>
				<a href="/jbsite3/about">About</a>
				<a href="/jbsite3/accessibility">Accessibility</a>
				<a href="https://jbcarreon123.atabook.org"> Sign my guestbook! </a>
				<a href="https://nekoweb.org/follow/jbcarreon123" target="_blank" rel="noopener" aria-label="Follow me on Nekoweb!"> [+] </a>
			</div>
		</div>
	</nav>
</header>

<style lang="postcss">
	.h:hover div {
		animation: title 1700ms linear var(--n) 1 normal;
	}

	.h div {
		/* animation: test 1700ms linear var(--n) 1 normal; */
		font-family: 'Darumadrop One', serif;
		font-weight: 400;
		font-style: normal;
	}

	@keyframes title {
		from {
			margin-top: 3px;
		}
		to {
			margin-top: -3px;
		}
	}
</style>