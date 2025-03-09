import { readdirSync } from 'node:fs';

export function getPosts() {
    try {
      const files = readdirSync('./src/lib/blogs', { withFileTypes: true });
      return files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch (error) {
      console.error(`Error reading articles:`, error);
      return [];
    }
}