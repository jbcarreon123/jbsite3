export async function load({ params }) {
    const utilPage = await import(`$lib/utils/${params.slug}/page.svelte`);
    const util = await import(`$lib/utils/${params.slug}/metadata.ts`);

    console.log(utilPage)

    return {
        utilPage,
        util
    };
}