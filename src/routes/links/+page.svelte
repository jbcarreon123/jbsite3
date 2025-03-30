<script>
    import Buttons from "$lib/components/buttons.svelte";
    import SiteButtons from "$lib/components/site-buttons.svelte";
    import { onMount } from 'svelte';

    let reducedMotion = false;
    onMount(async () => {
        setTimeout(function() {
            document.getElementById("FCWL")?.querySelector(".webring-info > a > img")?.setAttribute("alt", "From the Philippines, with love!")
            document.getElementById("FCWL")?.querySelector(".webring-prev > a > img")?.setAttribute("alt", "Previous site")
            document.getElementById("FCWL")?.querySelector(".webring-next > a > img")?.setAttribute("alt", "Next site")
        }, 250)

        reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (ev) => {
            reducedMotion = ev.matches
        })
    })
</script>

<svelte:head>
    <title>Links</title>

    <link rel="stylesheet" href="https://darkosparko.nekoweb.org/webrings/apartments-webring/apartment-webring-style.css">
</svelte:head>

<div class="w-full border-2 border-ctp-yellow p-1.5 mb-3">
    <h1 class="headercolor mt-[-6px] pb-2 text-2xl">Warning</h1>
    <p>
        Hey! This page is mobile friendly, <b>but not mobile optimized</b>. You might experience lags when you are here.
    </p>
    {#if reducedMotion}
    <p>
        Seems like you have reduced motion enabled! This page contains moving images and stuff!
    </p>
    <p>
        If you don't feel well after you got into here, just go back!
    </p>
    {/if}
</div>

<h1 class="headercolor pb-2"><a href="/webrings">My webrings</a></h1>
<div class="flex flex-auto flex-wrap gap-4 w-full">
    <script src="/webrings/ssgring/pmoring.js"></script>
</div>

<h1 class="headercolor pb-2">Webrings</h1>
<div id="webrings" class="flex flex-auto flex-wrap gap-4 w-full">
    <div id='FCWL' class="pb-4">
        <script type="text/javascript" src="https://beaus-silly-folder.nekoweb.org/my-webrings/FCWL/onionring-variables.js"></script>
        <script type="text/javascript" src="https://beaus-silly-folder.nekoweb.org/my-webrings/FCWL/widgets/philippines.js"></script>
    </div>

    <div class="text-left max-w-md">
        <div>
            <a href="https://webring.bucketfish.me/" class="py-4" target="_blank"><h1 class=" mt-[-6px] pb-2 text-2xl text-ctp-sapphire hover:text-ctp-blue">bucket webring!</h1></a>
            <div class="flex flex-row w-full text-center pb-4">
                <a class="grow" href="https://webring.bucketfish.me/redirect.html?to=prev&name=jbcarreon123" >&lt; prev</a>
                <a class="grow" href="https://webring.bucketfish.me/redirect.html?to=random&name=jbcarreon123" >rand</a>
                <a class="grow" href="https://webring.bucketfish.me/redirect.html?to=next&name=jbcarreon123" >next &gt;</a>
            </div>
        </div>
    
        <div style="">
            <a href="//mr.jhorn.net/index.php"><img src="//mr.jhorn.net/assets/button.gif" alt="Musicring"></a>
            <div class="flex flex-row min-w-3xs text-center pb-4">
                <a class="grow" href="//mr.jhorn.net/prev.php?slug=jbcarreon123">&lt; prev</a>
                <a class="grow" href="//mr.jhorn.net/rand.php">rand</a>
                <a class="grow" href="//mr.jhorn.net/next.php?slug=jbcarreon123">next &gt;</a>
            </div>
        </div>

        <div>
            <a href="https://baccyflap.com/noai/?prv&s=jcr" target="_top">« prev</a> |
            <a href="https://baccyflap.com/noai" target="_blank">no ai webring</a>
            <a style="font-size:60%" href="https://baccyflap.com/noai/?rnd" target="_top">(random)</a> |
            <a href="https://baccyflap.com/noai/?nxt&s=jcr" target="_top">next »</a>
        </div> 
    
        <div>
            <script src="https://astracelestine.nekoweb.org/webring/tropical-rice-bowl/widgettext.js"></script>
        </div>
    </div>
    

    <webring-container>
        <config key="type" value="gruvbox-dark"></config>
        <config key="font" value="Overused Grotesk, Arial, sans-serif"></config>
        <config key="fill" value="false"></config>
    
        <script src="https://palette.nekoweb.org/webring.js"></script>
    </webring-container>

    <div>
        <script defer src="https://mechagic.party/1stylescripts/gitgudring.js"></script>
    </div>

    <div id='apartment-webring'>
        <script type="text/javascript" src="https://darkosparko.nekoweb.org/webrings/apartments-webring/apartment-webring-variables.js"></script>
        <script type="text/javascript" src="https://darkosparko.nekoweb.org/webrings/apartments-webring/apartment-webring-widget.js"></script>
    </div> 

    <div id="rice-ring">
        <link rel="stylesheet" href="https://terakun.nekoweb.org/ricepaddy/webring.css"> 
        <script type="text/javascript" src="https://terakun.nekoweb.org/ricepaddy/webring-variables.js"></script>
        <script type="text/javascript" src="https://terakun.nekoweb.org/ricepaddy/webring-widget.js"></script>
    </div>

    <div id='focusfirst-webring'>
        <script type="text/javascript" src="https://www.beepbird.net/webring/onionring-variables.js"></script>
        <script type="text/javascript" src="https://www.beepbird.net/webring/onionring-widget.js"></script>
        <noscript><a href='https://www.beepbird.net/index.html'><img src="https://www.beepbird.net/webring/focusfirst.png" alt="Focus First Index"></a></noscript>
    </div>
</div>

<Buttons />

<h1 class="headercolor pb-2">Check these sites out!</h1>
<p>because you can't have enough buttons for your site</p>
<div class="pt-2 pb-4">
	
	<SiteButtons />
	
</div>

<h1 class="headercolor pb-2">.+link.+</h1>
<div class="grid md:grid-flow-col gap-4">
    <iframe
        title="nekolink"
        loading="lazy"
        class="aspect-square w-full max-w-2xs"
        style="border:none;"
        src="https://rubybulbs.net/neko.html"
    ></iframe>

    <iframe style="border:none" class="aspect-square max-h-2xs w-full max-w-2xs" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>
</div>

<style lang="postcss">
    #apartment-webring {
        margin: 0 !important;
    }

    #rice-ring :global {
        .webring-title {
            top: 0px;
        }
        .webring-flex {
            bottom: 40px;
        }
        .webring-footer {
            margin-top: -40px;
        }

        height: 250px;
    }

    @media (width < 40rem) {
        #webrings > * {
            margin: 0 auto !important;
        }
    }
</style>