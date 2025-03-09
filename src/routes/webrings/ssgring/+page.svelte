<script>
	import { memoryUsage } from "process";
	import { onMount } from "svelte";

    let mems;
    onMount(async () => {
        let req = await fetch('/webrings/ssgring/members.json')
        mems = await req.json()
    })
</script>

<svelte:head>
    <title>SSGRing</title>
</svelte:head>

<h1 class="headercolor">SSGRing</h1>
<p>Webring for sites that uses Static Site Generation frameworks.</p>


<div class="w-md">
    <script src="/webrings/ssgring/pmoring.js"></script>
</div>

<h2>Guidelines</h2>
<p>Here's the guidelines for joining this webring:</p>
<ol class="list-decimal pl-12">
    <li>
        <h2>Sites should be built using a SSG framework.</h2>
        <p><b>This is important</b> as this is the entire scope of this webring.</p>
        <p>Whether it's Svelte, Astro, 11ty, or something, if it's a SSG framework, it's allowed.</p>
    </li>
    <li>
        <h2>Sites should be your own creation.</h2>
        <p>Although websites that uses a template or layout template (but modified it) is allowed, I don't allow websites built using site builders.</p>
        <p>Plagiarizing someone's site, though, is strictly not allowed.</p>
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
<p>Contact JB at <code>@jbcarreon123</code> on Discord (if you are on the Nekoweb discord, and recommended!), or <code>jbcarreon212@gmail.com</code> on email (make sure your email's title is SSGRing and mark it as important!)</p>
<p>Tell me your:</p>
<ul class="list-disc pl-12">
    <li>
        <p>Slug (Username, no spaces or special chars please!)</p>
    </li>
    <li>
        <p>Framework</p>
    </li>
    <li>
        <p>Age rating (if there is)</p>
    </li>
    <li>
        <p>Your site button URL (optional, recommended)</p>
    </li>
    <li>
        <p>Your elevator pitch</p>
    </li>
</ul>
<p>and wait. I'm gonna add you and notify you via the method you've used.</p>

<h2>Webring widget</h2>
<p>If you're cool about embedding JS on your site, here's a one-liner code to end them all!</p>
<p>Powered by <a href="https://thinliquid.github.io/pmoring/" target="_blank">pmoring</a>.</p>
<textarea class="code">
<script src="https://jbcarreon123.nekoweb.org/webrings/ssgring/pmoring.js"></script>
</textarea>
<p>If not, here's the direct URLs. Note that the user needs JS so they can successfully go to the other sites.</p>
<ul class="list-disc pl-12">
    <li>
        <p>Previous: <code>https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=[YOUR_USERNAME]&way=prev</code></p>
    </li>
    <li>
        <p>Next: <code>https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=[YOUR_USERNAME]&way=next</code></p>
    </li>
    <li>
        <p>Random: <code>https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?way=rand</code></p>
    </li>
</ul>
<p>Just replace <code>[YOUR_USERNAME]</code> to your username given.</p>

<h2>Widget customization</h2>
<p>
    Use <code>#pmoring.ssgring</code> for styling the widget. Also you can put the class <code>afterdark</code> or
    <code>brat</code> on the script tag if you want the default pmoring style.
</p>

<h2>Members</h2>
<table>
    <tbody>
        <tr>
            <td>
                <strong>Name</strong>
            </td>
            <td>
                <strong>Framework</strong>
            </td>
            <td>
                <strong>Elevator pitch</strong>
            </td>
        </tr>
        {#each mems as member}
        <tr>
            <td>
                {console.log(mems)}
                <a href="//{member.host}">{member.username}</a>
                <p class="text-ctp-red">{(member.type)? 'Note: ' + member.type : ''}</p>
                {#if member.button}
                <img src="{member.button}" alt="" />
                {/if}
            </td>
            <td>
                {@html member.framework}
            </td>
            <td>
                {(member.pitch && member.pitch !== "")? member.pitch : 'Nothing'}
            </td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
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