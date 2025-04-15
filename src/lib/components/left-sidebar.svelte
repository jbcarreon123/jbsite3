<script>
	import { LinkHandler } from "$lib/linkhandler";
	import BlogToc from "./blog-toc.svelte";

</script>
<nav>
    <div class="p-1.5">
        <h1 class=" headercolor mt-[-6px] pb-2 text-2xl">Navigation</h1>
        <div
            class="flex flex-col justify-center gap-2"
            data-sveltekit-preload-data="hover"
        >
            <a href={LinkHandler('/')}>Home</a>
            <a href={LinkHandler('/posts')}>Posts</a>
            <a href={LinkHandler('/contact')}>Contact</a>
            <a href={LinkHandler('/projects')}>Projects</a>
            <a href={LinkHandler('/credits')}>Credits</a>
            <a href={LinkHandler('/links')}>Links</a>
            <a href={LinkHandler('/about')}>About</a>
            <a href={LinkHandler('https://jbcarreon123.atabook.org')}>Sign my guestbook!</a>
            <a href={LinkHandler('https://nekoweb.org/follow/jbcarreon123" target="_blank" rel="noopener')}>Follow me on Nekoweb!</a>
        </div>
    </div>
</nav>

<BlogToc />