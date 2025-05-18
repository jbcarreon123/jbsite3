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
            <a href="/jbsite3/">Home</a>
            <a href="/jbsite3/posts">Posts</a>
            <a href="/jbsite3/contact">Contact</a>
            <a href="/jbsite3/projects">Projects</a>
            <a href="/jbsite3/credits">Credits</a>
            <a href="/jbsite3/links">Links</a>
            <a href="/jbsite3/about">About</a>
            <a href="https://jbcarreon123.atabook.org">Sign my guestbook!</a>
            <a href="https://nekoweb.org/follow/jbcarreon123" target="_blank" rel="noopener">Follow me on Nekoweb!</a>
        </div>
    </div>
</nav>

<BlogToc />