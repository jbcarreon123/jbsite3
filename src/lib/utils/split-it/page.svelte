<script>
	import { codeToHtml, createHighlighter } from 'shiki';
	import { addCopyButton } from 'shiki-transformer-copy-button';

	let splo;

	async function pChange() {
		let el = document.querySelector('#pre')?.value;

		switch (el) {
			case 'basic-span':
				document.querySelector('#sep').value = '';
				document.querySelector('#tag').value = 'span';
				document.querySelector('#attrs').value = '';
				document.querySelector('#void').checked = false;
				break;
			case 'span-tag':
				document.querySelector('#sep').value = '';
				document.querySelector('#tag').value = 'span';
				document.querySelector('#attrs').value = "id='span-((i))'";
				document.querySelector('#void').checked = false;
				break;
			case 'p-split':
				document.querySelector('#sep').value = '\\n\\n';
				document.querySelector('#tag').value = 'p';
				document.querySelector('#attrs').value = '';
				document.querySelector('#void').checked = false;
				break;
			case 'wrap-div':
				document.querySelector('#sep').value = '';
				document.querySelector('#tag').value = 'div';
				document.querySelector('#attrs').value = '';
				document.querySelector('#void').checked = false;
				break;
		}

		fChange();
	}

	async function fChange() {
		let sep = document.querySelector('#sep')?.value;
		let spl = document.querySelector('#text-split')?.value.split(sep.replaceAll('\\n', '\n'));
		let tag = document.querySelector('#tag')?.value;
		let att = document.querySelector('#attrs')?.value;
		let voi = document.querySelector('#void')?.checked;

		splo = spl
			.map((t, i) => {
				if (/^\s+$/.test(t)) {
					return t;
				}

				return voi
					? `<${tag}${att ? ` ${att}` : ''}/>`.replaceAll('((i))', i).replaceAll('((v))', t)
					: `<${tag}${att ? ` ${att}` : ''}>${t}</${tag}>`
							.replaceAll('((i))', i)
							.replaceAll('((v))', t);
			})
			.join('\n');

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

<h1>Split It!</h1>
<p>
	Basically <a href="https://juneish.neocities.org/written/resources/?page=span-ify" target="_blank"
		>juneish's span-ify</a
	>, but customizable!
</p>

<div id="cont" class="grid gap-4 pt-4 sm:grid-cols-2">
	<div id="left" class="w-full">
		<div>
			<p>Presets</p>
			<select id="pre" class="w-full" size="4" on:change={pChange}>
				<option value="basic-span">Basic &lt;span&gt;</option>
				<option value="span-tag">&lt;span&gt; with id</option>
				<option value="p-split">Paragraph split (from layercake)</option>
				<option value="wrap-div">Wrap each chars in a &lt;div&gt;!!!</option>
			</select>
		</div>
		<form on:input|preventDefault={fChange} class="w-full">
			<div>
				<label for="text-split">Text to split</label><br />
				<textarea class="w-full border" id="text-split"></textarea>
			</div>
			<div>
				<label for="sep"
					>The seperator (leave blank to split each character, use \n to split newlines)</label
				><br />
				<input type="text" class="w-full border" id="sep" value="" />
			</div>
			<div>
				<label for="tag">The tag</label><br />
				<input type="text" class="w-full border" id="tag" value="span" />
			</div>
			<div>
				<input type="checkbox" id="void" /> <label for="void">Void element?</label>
			</div>
			<div>
				<label for="attrs">Tag Attributes</label><br />
				<p>
					Use <code>((i))</code> for the index, and<br /><code>((v))</code> for the value (useful for
					void tags!)
				</p>
				<input type="text" class="w-full border" id="attrs" value="" />
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
