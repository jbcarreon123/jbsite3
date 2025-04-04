export async function load({ url }) {
    const currentPage = url.pathname || "/"
    const hostname = url.hostname;

    return { currentPage, hostname }
}
