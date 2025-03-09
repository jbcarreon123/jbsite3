<script context="module">
	import { LASTFM_API_KEY, LASTFM_USERNAME } from '../config';

	export async function preload() {
		try {
			const response = await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			let nowPlaying = null;

			if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
				nowPlaying = data.recenttracks.track[0];
				if (nowPlaying['@attr'] && nowPlaying['@attr'].nowplaying === 'true') {
					nowPlaying.isPlaying = true;
				} else {
					nowPlaying.isPlaying = false;
				}
			}

			return { nowPlaying };
		} catch (error) {
			console.error('Error fetching Last.fm data:', error);
			return { nowPlaying: null, error: error.message };
		}
	}
</script>

<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
  	import { fade } from 'svelte/transition';

	export let nowPlaying;
	export let error;

	let oldNpTitle: string = "";

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let nowPlayingStore: Writable<any>;

	if (typeof window !== 'undefined') {
		nowPlayingStore = writable(nowPlaying || null);
	} else {
		nowPlayingStore = writable(null);
	}

	async function getNowPlaying() {
		try {
			const response = await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
				const newNowPlaying = data.recenttracks.track[0];
				if (newNowPlaying['@attr'] && newNowPlaying['@attr'].nowplaying === 'true') {
					newNowPlaying.isPlaying = true;
				} else {
					newNowPlaying.isPlaying = false;
				}
				if (oldNpTitle != newNowPlaying.name) {
					nowPlayingStore.set(null);
					setTimeout(function() { nowPlayingStore.set(newNowPlaying); }, 500)
				}
				oldNpTitle = newNowPlaying.name;
			} else {
				nowPlayingStore.set(null);
			}
		} catch (err) {
			console.error('Error fetching Last.fm data:', err);
			nowPlayingStore.set(null);
		}
	}

	onMount(async () => {
		if (typeof window !== 'undefined') {
			nowPlayingStore.set(nowPlaying);
			if (!nowPlaying) {
				await getNowPlaying();
				nowPlayingStore.set(nowPlaying);
			}

			const intervalId = setInterval(getNowPlaying, 60000);
			return () => clearInterval(intervalId);
		}
	});

	$: nowPlaying = $nowPlayingStore;
</script>

<div use:autoAnimate>
	{#if nowPlaying}
    {#key nowPlaying.isPlaying}
		<h1 in:fade id="np-status" class=" headercolor pb-2 text-2xl">
			{#if nowPlaying.isPlaying}
				Currently playing
			{:else}
				Last played
			{/if}
		</h1>
    {/key}
		<div class="flex items-center justify-center">
			<div class="flex-1/4 p-1">
        {#key nowPlaying.image}
				{#if nowPlaying.image && nowPlaying.image[2] && nowPlaying.image[2]['#text']}
					<img
						src={nowPlaying.image[2]['#text']}
						class="aspect-square "
						alt='{nowPlaying.artist['#text']}: {nowPlaying.name}'
						width="auto"
						height="auto"
						loading="lazy"
            			in:fade out:fade
					/>
				{/if}
        {/key}
			</div>
			<div class="flex-3/4 p-1">
        {#key nowPlaying.name}
				<a
					class="nocol text-ellipsis"
					href={nowPlaying.url}
					id="np-title"
					target="_blank" rel="noopener" in:fade out:fade
					aria-labelledby="np-status np-title"
					aria-describedby="np-artist np-album np-lnk"
				>
					<div class="mt-[-6px] text-ctp-sapphire hover:text-ctp-blue text-3xl sm:text-2xl">
						{nowPlaying.name}
					</div></a
				>
				<p class="text-sm" id="np-artist" in:fade out:fade>by {nowPlaying.artist['#text']}</p>
				{#if nowPlaying.album && nowPlaying.album['#text'] && nowPlaying.name !== nowPlaying.album['#text'] && nowPlaying.artist['#text'] !== nowPlaying.album['#text']}
					<p class="text-sm" id="np-album" in:fade out:fade>in {nowPlaying.album['#text']}</p>
				{/if}
				<p class="sr-only" id="np-lnk">
					Press enter to go to song's last.fm page
				</p>
        {/key}
			</div>
		</div>
	{:else if error}
		<p style="color: red;">Error: {error}</p>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
