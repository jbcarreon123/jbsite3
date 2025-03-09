<script>
    import { todos } from "$lib/changelogs-todo";
</script>

<div>
    <h1 class=" headercolor mt-[-6px] pb-2 text-2xl">todos!</h1>
	<ul class="list-disc list-outside pl-8">
        {#each todos as todo}
            <li >{todo}</li>
        {/each}
    </ul>
</div>