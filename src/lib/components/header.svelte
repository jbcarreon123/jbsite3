<header>
	<div class="grid grid-cols-1 justify-items-center pt-4 pb-8">
		<a href="/" class="nocol" aria-label="jbcarreon123">
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
				<a href="/">Home</a>
				<a href="/blogs">Posts</a>
				<a href="/contact">Contact</a>
				<a href="/projects">Projects</a>
				<a href="/credits">Credits</a>
				<a href="/links">Links</a>
				<a href="/about">About</a>
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
