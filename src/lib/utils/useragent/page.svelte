<script>
	import { onMount } from "svelte";

    let userAgent, userAgentDataJson;

    let userAgentClientHintsAvailable = $state(false);

    onMount(() => {
        userAgent.innerText = navigator.userAgent;

        if (navigator.userAgentData) {
            userAgentClientHintsAvailable = true;
            userAgentDataJson = JSON.stringify(navigator.userAgentData.toJSON())
        }
    })
</script>

<h1>Your user agent is:</h1>
<p bind:this={userAgent}>Loading</p>

{#if userAgentClientHintsAvailable}
<h1>User Agent Client Hints:</h1>
<textarea readonly data-lang="js" class="shiki-code w-full border">{userAgentDataJson}</textarea>
{:else}
<p>Your browser does not support UACH, unfortunately.</p>
{/if}