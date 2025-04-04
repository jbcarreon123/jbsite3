import tailwind from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json'

export default defineConfig({
	plugins: [sveltekit(), tailwind()],
	assetsInclude: ['**/*.svx'],
	define: {
		__NAME__: `"${pkg.name}"`,
		__VERSION__: `"${pkg.version}"`,
	},
});
