export async function load({ url }) {
    const currentPage = url.pathname || "/jbsite3/"
    const hostname = url.hostname;

    return { currentPage, hostname }
}
