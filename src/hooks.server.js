
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  const url = event.url;

  if (url.pathname.startsWith('/api/')) {  
    const originalPath = url.pathname;
    const newPath = `https://jb.is-a.dev${originalPath}${url.search}`; 

    throw redirect(308, newPath);
  }

  const response = await resolve(event); 
  return response;
}