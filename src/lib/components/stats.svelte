<script lang="ts">
	import { onMount } from "svelte";
    import autoAnimate from '@formkit/auto-animate';

    let json: any;
    let updated: string;
    let created: string;

    onMount(async () => {
        const request = await fetch(`https://nekoweb.org/api/site/info/jbcarreon123`,);
        json = await request.json();

        updated = new Date(json.updated_at).toLocaleDateString();
        created = new Date(json.created_at).toLocaleDateString();
    })
</script>

<div use:autoAnimate>
    {#if json}
        <h1 class=" mt-[-6px] headercolor pb-2 text-2xl">Statistics</h1>
        <div class="flex flex-row w-full">
            <div class="text-left grow">
                <p>Created:</p>
                <p>Updated:</p>
                <p>Views:</p>
                <p>Followers:</p>
            </div>
            <div class="text-right grow">
                <p>{created}</p>
                <p>{updated}</p>
                <p>{json.views}</p>
                <p>{json.followers}</p>
            </div>
        </div>
    {:else}
        <p>Loading stats...</p>
    {/if}
</div>