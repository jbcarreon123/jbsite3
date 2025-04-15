<script>
	import { LinkHandler } from "$lib/linkhandler";
    let { info } = $props();
</script>

{#if info}
    <h2>{info.title}</h2>
{/if}