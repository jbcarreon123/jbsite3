<script context="module">
	import { codeToHtml, createHighlighter } from 'shiki';
	import { addCopyButton } from 'shiki-transformer-copy-button';
	import {
		transformerMetaHighlight,
		transformerMetaWordHighlight,
		transformerNotationHighlight,
		transformerNotationWordHighlight
	} from '@shikijs/transformers';
	import { browser } from '$app/environment';

	const sitebtns = [
		'<a href="https://jbcarreon123.nekoweb.org"><img src="https://jbcarreon123.nekoweb.org/sitebutton.png" alt="jb\'s site" style="image-rendering: pixelated;"/jbsite3/></a>',
		'<a href="https://jbcarreon123.nekoweb.org"><img src="https://jbcarreon123.nekoweb.org/sitebuttonv2.png" alt="jb\'s site" style="image-rendering: pixelated;"/jbsite3/></a>',
		'<a href="https://jbcarreon123.nekoweb.org"><img src="https://jbcarreon123.nekoweb.org/sitebutton2.png" alt="jb\'s site" style="image-rendering: pixelated;"/jbsite3/></a>'
	];
	let sitebtnshast = $state();

	async function init() {
		let gruvboxDark, gruvboxLight;
		const themeFiles = import.meta.glob('../shiki/*.json', { query: '?json' });
		gruvboxDark = await themeFiles['../shiki/gruvbox-dark.json']();
		gruvboxLight = await themeFiles['../shiki/gruvbox-light.json']();

		const options = {
			toggle: 2000
		};

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
			langs: ['html']
		});

		sitebtnshast = await Promise.all(
			sitebtns.map(async (v) => {
				let hast = await highlighter.codeToHtml(v, {
					lang: 'html',
					themes: {
						mocha: 'catppuccin-mocha',
						latte: 'catppuccin-latte',
						macchiato: 'catppuccin-macchiato',
						frappe: 'catppuccin-frappe',
						gruvboxdark: gruvboxDark,
						gruvboxlight: gruvboxLight,
						highcontrastdark: 'github-dark-high-contrast',
						highcontrastlight: 'github-light-high-contrast'
					},
					defaultColor: 'mocha',
					transformers: [addCopyButton(options)]
				});
				return {
					hast: hast,
					html: v
				};
			})
		);
	}

	init();
</script>

<h1 class="headercolor pb-2">My site button(s)</h1>
<p>
	Hotlink or not to hotlink, your choice is yours. But I recommend hotlinking because it's much
	easier that way.
</p>
<div class="sbtn grid grid-flow-col gap-4 overflow-x-scroll pb-4">
	{#each sitebtnshast as sitebtn}
		<div class="w-xs max-w-xs">
			<div class="flex justify-center">
				{@html sitebtn.html}
			</div>
			<div class="w-xs max-w-xs">
				{@html sitebtn.hast}
			</div>
		</div>
	{/each}
</div>

<style>
	.sbtn :global {
		code {
			text-overflow: clip;
			text-wrap: wrap;
		}
	}
</style>
