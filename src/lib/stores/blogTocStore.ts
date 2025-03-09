import { writable } from "svelte/store";

export const isBlog = writable(false);
export const blogToc = writable<any[]>([]);