<script>
	import { onMount } from "svelte";

    let { data } = $props();
    let { utils } = data;

    function groupArrayByCategory(arr) {
		const result = {};
		arr.forEach((item) => {
			const category = item.utilCate;

			if (!result[category]) {
				result[category] = {
					name: category,
					utils: []
				};
			}

			result[category].utils.push(item);
		});
		return Object.values(result);
	}

    utils = groupArrayByCategory(utils);
</script>

<svelte:head>
    <title>Utils</title>
</svelte:head>

<h1>Utilities</h1>
<p>Here's some stuff that jb made for the site that doesn't go somewhere or idk</p>

{#each utils as util}
{console.log(util)}
<h1>{util.name}</h1>
<div class="flex flex-wrap gap-3">
    {#each util.utils as ut}
    <a href="/utils/{ut.utilSlug}" class="w-full sm:w-2xs">
        <h2>{ut.utilName}</h2>
        <p>{ut.utilDesc}</p>
    </a>
    {/each}
</div>
{/each}