<script>
	import LastPlays from "$lib/components/last-plays.svelte";


	import NowPlaying from "$lib/components/now-playing.svelte";
	import autoAnimate from "@formkit/auto-animate";

</script>
<h1>Music</h1>
<div use:autoAnimate>
    <LastPlays />
</div>

<style>
    #last-plays {
        div:not(.no-gap) {
            border: 1px solid rgb(var(--ctp-overlay0));
            padding: 6px;
        }
    }
</style>