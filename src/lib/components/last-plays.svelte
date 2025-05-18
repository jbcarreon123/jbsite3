<script lang="ts">

	import autoAnimate from '@formkit/auto-animate';
  	import { fade } from 'svelte/transition';

	let oldNpTitle: string = "";

	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { LASTFM_API_KEY, LASTFM_USERNAME } from '$lib/config';

    let lastPlays: any[] = $state();

	async function getNowPlaying() {
		try {
			const response = await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=12`
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
				lastPlays = data.recenttracks.track.map(
                    (v) => {
                        if (v['@attr'] && v['@attr'].nowplaying === 'true') {
                            v.isPlaying = true;
                        } else {
                            v.isPlaying = false;
                        }
                        console.log(v)
                        return v;
                    }
                );
                lastPlays = lastPlays.filter((p) => !p.isPlaying)
			} else {
			}
		} catch (err) {
			console.error('Error fetching Last.fm data:', err);
		}
	}

	onMount(async () => {
		if (typeof window !== 'undefined') {
			await getNowPlaying()
		}
	});

    $effect(() => {
        $inspect(lastPlays)
    })
</script>

{#if lastPlays}
<h1 class="pb-2">Recent plays</h1>
<div class="np-container flex flex-auto flex-wrap gap-2 items-center justify-center" use:autoAnimate>
    {#each lastPlays as plays}
        <a href={plays.url}>
            <img class="w-24 md:w-32" src={plays.image[2]['#text']} alt="{plays.name} by {plays.artist['#text']}" data-hover="<span class='title'>{plays.name}</span><br /><span class='info'>by {plays.artist['#text']}{plays.album['#text']? `<br>in ${plays.album['#text']}`: ''}</span><br /><span class='link'>{plays.url}</link>"/jbsite3/>
        </a>
    {/each}
</div>
{/if}

<style>
	img {
		position: relative;
		image-rendering: pixelated;
		z-index: 2;
	}

	img:hover {
		z-index: 5;
		transform: scale(1.25);
		filter: blur(0);
	}

	.np-container:has(img:hover) img:not(:hover) {
		z-index: 1;
		opacity: 0.5;
		filter: blur(2px);
	}
</style>
