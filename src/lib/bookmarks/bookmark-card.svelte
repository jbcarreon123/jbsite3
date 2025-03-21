<script>
    let { info } = $props();
</script>

{#if info}
    <h2>{info.title}</h2>
{/if}