<script lang="ts">
    let props = $props();
</script>


<a class="nocol" href={blog.articleUrl}>
    <div class="w-full m-0.5 mt-0 nocol p-1.5 abd">
        <p class="nocol nocol text-3xl/[0.75] text-ellipsis hover:text-ctp-blue dark:hover:text-ctp-blue" href={blog.articleUrl}>{blog.metadata.title}</p>
        <p class="nocol pt-2">{blog.metadata.description}</p>
    </div>
</a>

