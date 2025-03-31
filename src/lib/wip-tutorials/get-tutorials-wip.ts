import { readdirSync } from 'node:fs';

export function getTutsWip() {
    try {
      const files = readdirSync('./src/lib/wip-tutorials', { withFileTypes: true });
      return files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch (error) {
      console.error(`Error reading articles:`, error);
      return [];
    }
}