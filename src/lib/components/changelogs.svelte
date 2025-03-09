<script context="module">
    import { changelogs } from "$lib/changelogs-todo";    
	import { toZonedTime } from "date-fns-tz";
    let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;
</script>

<div>
    <h1 class=" headercolor mt-[-6px] pb-2 text-2xl">Changelogs!</h1>
	{#each changelogs as changelog}
        <p class="text-sm text-ctp-subtext0">{toZonedTime(changelog.date, ltz).toLocaleDateString()} {toZonedTime(changelog.date, ltz).toLocaleTimeString()}</p>
        <p class="pb-2">{changelog.content}</p>
    {/each}
</div>