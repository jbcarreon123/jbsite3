<script>
	import BlogToc from "./blog-toc.svelte";

</script>
<nav>
    <div class="p-1.5">
        <h1 class=" headercolor mt-[-6px] pb-2 text-2xl">Navigation</h1>
        <div
            class="flex flex-col justify-center gap-2"
            data-sveltekit-preload-data="hover"
        >
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
            <a href="/credits">Credits</a>
            <a href="/links">Links</a>
            <a href="/about">About</a>
            <a href="https://jbcarreon123.atabook.org">Sign my guestbook!</a>
            <a href="https://nekoweb.org/follow/jbcarreon123" target="_blank" rel="noopener">Follow me on Nekoweb!</a>
        </div>
    </div>
</nav>

<BlogToc />