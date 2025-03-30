import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from 'svelte-adapter-nekoweb';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeFigure from 'rehype-figure';
import { createHighlighter, bundledLanguagesInfo } from 'shiki';
import { env } from 'node:process';
import { addCopyButton } from 'shiki-transformer-copy-button'
import { transformerNotationDiff, transformerNotationFocus, transformerMetaHighlight, transformerMetaWordHighlight, transformerNotationHighlight, transformerNotationWordHighlight } from '@shikijs/transformers';
import { read, readFileSync } from 'node:fs';
import remarkReadingTime from 'remark-reading-time';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import readingTime from 'reading-time';

const options = {
	toggle: 2000,
}

const gruvboxDark = JSON.parse(readFileSync('src/lib/shiki/gruvbox-dark.json', 'utf-8'));
const gruvboxLight = JSON.parse(readFileSync('src/lib/shiki/gruvbox-light.json', 'utf-8'));

const languages = bundledLanguagesInfo.map((x) => x.id);
const themes = [
	'catppuccin-mocha',
	'catppuccin-latte',
	'catppuccin-macchiato',
	'catppuccin-frappe',
	gruvboxDark,
	gruvboxLight,
	'github-dark-high-contrast',
	'github-light-high-contrast'
];
const highlighter = await createHighlighter({
	themes: themes,
	langs: languages
});

function addWordCountToFrontmatterData({
	attribute = "wordCount",
} = {}) {
	return function (info, file) {
		let text = "";

		visit(info, ["text", "code"], (node) => {
			text += node.value;
		});

		file.data.fm[attribute] = text.split(/\s+/).length;
	};
}

function addReadingTimeToFrontmatterData({
	attribute = "readingTime",
} = {}) {
	return function (info, file) {
		let text = "";

		visit(info, ["text", "code"], (node) => {
			text += node.value;
		});

		let time = readingTime(text)
		file.data.fm[attribute] = time.text;
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		rehypePlugins: [
			[rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' }],
			[rehypeSlug],
			[rehypeAutolinkHeadings],
			[rehypeFigure]
		],
		remarkPlugins: [
			[remarkGfm],
			// [remarkReadingTime],
			[addWordCountToFrontmatterData],
			[addReadingTimeToFrontmatterData]
		],
		smartypants: {
			ellipses: false
		},
		highlight: {
			highlighter: async (code, lang = 'text') => {
				const html = escapeSvelte(highlighter.codeToHtml(code, {
					lang, themes: {
						mocha: 'catppuccin-mocha',
						latte: 'catppuccin-latte',
						macchiato: 'catppuccin-macchiato',
						frappe: 'catppuccin-frappe',
						gruvboxdark: gruvboxDark,
						gruvboxlight: gruvboxLight,
						highcontrastdark: 'github-dark-high-contrast',
						highcontrastlight: 'github-light-high-contrast'
					}, defaultColor: 'mocha',
					transformers: [
						transformerNotationDiff(),
						transformerNotationHighlight(),
						transformerNotationWordHighlight(),
						transformerMetaHighlight(),
						transformerMetaWordHighlight(),
						addCopyButton(),
					]
				}));
				return `{@html \`${html}\` }`;
			}
		}
	})],

	kit: {
		adapter: adapter({
			apiKey: env.NEKOWEB_APIKEY,
			cookie: env.NEKOWEB_COOKIE
		}),

		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				return;
			}
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
