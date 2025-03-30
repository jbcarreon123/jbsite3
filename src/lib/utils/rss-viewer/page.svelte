<script>
	import { onMount } from 'svelte';
    import Parser from 'rss-parser';
	import { isNoneTheme } from 'shiki';

    let error = $state();
    let rss = $state();
    let parser = new Parser();

	async function fChange() {
        let url = document.querySelector('#url')?.value;

        if (!url) {
            rss = undefined;
            error = undefined;
            return;
        }

        let res = await fetch(url)

        if (!res.ok) {
            error = res.statusText
            return
        }

        let text = await res.text();

        parser.parseString(text, (e, f) => {
            if (e) {
                error = e.message;
                return;
            }

            rss = f;
        })
    }
</script>

<h1>RSS Feed Viewer</h1>
<p>Note that you might need to install a CORS unblock extension to properly use this tool</p>
<form on:change|preventDefault={fChange} class="w-full pt-2">
	<div>
		<label for="url">URL of the feed</label><br />
		<input type="text" class="w-full border" id="url" value="" />
	</div>
</form>

<div class="pt-4">
	{#if rss}
		<h2>{rss.title}</h2>
        <p>{rss.description}</p>
        <hr />
        <div class="flex flex-wrap gap-2">
            {#each rss.items as item}
            <a href={item.link}>
                <div class="w-2xs">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <p>published at {new Date(item.isoDate).toLocaleString()}</p>
                    {console.log(item)}
                </div>
            </a>
            {/each}
        </div>
    {:else if error}
        <p>An error occured:</p>
        <p>{error}</p>
    {:else}
		<p>Put something!</p>
	{/if}
</div>
