import { readdirSync } from 'node:fs';

export function getUtils() {
    try {
      const files = readdirSync('./src/lib/utils', { withFileTypes: true });
      return files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch (error) {
      console.error(`Error reading Utils:`, error);
      return [];
    }
}