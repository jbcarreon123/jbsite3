<script>
	import { codeToHtml, createHighlighter } from 'shiki';
	import { addCopyButton } from 'shiki-transformer-copy-button';
	import markdownit from 'markdown-it';

	let splo;

	async function fChange() {
		let spl = document.querySelector('#text-split')?.value;

		const md = markdownit()
		splo = md.render(spl);

		const themes = [
			'catppuccin-mocha',
			'catppuccin-latte',
			'catppuccin-macchiato',
			'catppuccin-frappe',
			'min-dark',
			'min-light',
			'github-dark-high-contrast',
			'github-light-high-contrast'
		];
		const highlighter = await createHighlighter({
			themes: themes,
			langs: ['html']
		});

		let hast = await highlighter.codeToHtml(splo ? splo : 'Write something!', {
			lang: 'html',
			themes: {
				mocha: 'catppuccin-mocha',
				latte: 'catppuccin-latte',
				macchiato: 'catppuccin-macchiato',
				frappe: 'catppuccin-frappe',
				gruvboxdark: 'min-dark',
				gruvboxlight: 'min-light',
				highcontrastdark: 'github-dark-high-contrast',
				highcontrastlight: 'github-light-high-contrast'
			},
			transformers: [addCopyButton()],
			defaultColor: 'mocha'
		});

		document.querySelector('#out').innerHTML = hast;
	}
</script>

<h1>Markdown Converter</h1>
<p>
	Just another markdown converter
</p>

<div id="cont" class="grid gap-4 pt-4 sm:grid-cols-2">
	<div id="left" class="w-full">
		<form on:input|preventDefault={fChange} class="w-full">
			<div>
				<label for="text-split">Markdown input</label><br />
				<textarea class="w-full border" id="text-split"></textarea>
			</div>
		</form>
	</div>
	<div id="out" class="h-full w-full">Write something!</div>
</div>

<style>
	#left div {
		padding: 6px 0;
	}

	select option {
		padding: 5px;
	}

	#out :global {
		.shiki {
			max-height: fit-content;
			max-width: 100%;
			width: 100%;
		}
	}
</style>
