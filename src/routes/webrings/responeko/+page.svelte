<script>
	import { memoryUsage } from "process";
	import { onMount } from "svelte";

    let mems;
    onMount(async () => {
        let req = await fetch('/jbsite3/webrings/responeko/members.json')
        mems = await req.json()
    })
</script>

<svelte:head>
    <title>Responeko Webring</title>
</svelte:head>

<h1 class="headercolor">Responeko Webring</h1>
<p>A webring for Nekoweb sites that is responsive by design.</p>


<div class="w-md wb-responeko">
    <script src="/jbsite3/webrings/responeko/pmoring.js"></script>
</div>

<h2>Guidelines</h2>
<p>Here's the guidelines for joining this webring:</p>
<ol class="list-decimal pl-12">
    <li>
        <h2>Your site must be on Nekoweb.</h2>
        <p><b>This is important</b>!</p>
        <p>This also includes following the <a href="https://nekoweb.org/tos" target="_blank">Nekoweb Terms of Service</a>.</p>
    </li>
    <li>
        <h2>Your site must be responsive, and you must make an effort to keep it responsive.</h2>
        <p>This means that your site must work properly on any viewport, and especially on mobile.</p>
    </li>
    <li>
        <h2>Don't be an asshole.</h2>
        <p>Do not try to spam, or do stupid stuff just so I can let you join. It will just result to you likely getting denied.</p>
    </li>
    <li>
        <h2>You must be at least 13 years old to apply.</h2>
        <p>If I found out you're under 13 years old, your site will be removed and you'll be barred from future applications. <b>Do not complain.</b></p>
    </li>
    <li>
        <h2>Sites should be your own creation.</h2>
        <p>Although websites that uses a template or layout template (but modified it and it's responsive) is allowed, I don't allow websites built using site builders.</p>
    </li>
    <li>
        <h2>Your site should have something on it.</h2>
        <p>Just a simple about me page will suffice.</p>
    </li>
    <li>
        <h2>If your site has suggestive content on it, it should not be on the page you will link here.</h2>
        <p>Additionally, websites that contain hate speech, illegal content, abuse, or non-artistic NSFW content is not allowed.</p>
    </li>
    <li>
        <h2>After you've been joined, you need to put the widget somewhere.</h2>
        <p>Whether it is on the homepage, the landing page, or on a dedicated webrings page, it should be visible on your site!</p>
    </li>
</ol>

<h2>Wanna join?</h2>
<p>Contact JB at <code>@jbcarreon123</code> on Discord (if you are on the Nekoweb discord, and recommended!), or <code>jbcarreon212@gmail.com</code> on email (make sure your email's title is Responeko Webring and mark it as important!)</p>
<p>Tell me your:</p>
<ul class="list-disc pl-12">
    <li>
        <p>Slug (Username, no spaces or special chars please!)</p>
    </li>
    <li>
        <p>Your site URL, and </p>
    </li>
    <li>
        <p>a link of your expression image that is at least 105x175.</p>
    </li>
</ul>
<p>and wait. I'm gonna add you and notify you via the method you've used.</p>

<h2>Webring widget</h2>
<p>If you're cool about embedding JS on your site, here's a one-liner code to end them all!</p>
<p>Powered by <a href="https://thinliquid.github.io/pmoring/" target="_blank">pmoring</a>.</p>
<textarea class="code">
<script src="https://jbcarreon123.nekoweb.org/webrings/responeko/pmoring.js"></script>
</textarea>

<h2 id="members">Members</h2>
<div class="flex flex-wrap gap-2">
    {#each mems as member}
        <a href="/jbsite3//{member.host}">
            <div class="max-w-[105px]">
                <p class="text-nowrap overflow-hidden text-ellipsis">{member.title}</p>
                <div class="mem-plch">
                    <img src={member.expression} alt={member.title} />
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    .mem-plch {
        width: 105px;
        height: 175px;

        background-image: url(/imgs/responeko/placeholder.png);
    }

    table tr td:not(:last-child) {
        padding-right: 25px;
    }

    table tr td {
        padding: 5px;
        border: 1px solid rgb(var(--ctp-overlay0));
    }

    li p {
        padding-left: 12px;
    }

    li h2 {
        padding-top: 6px;
    }
</style>