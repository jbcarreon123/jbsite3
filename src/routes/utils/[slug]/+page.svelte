<script>
	import { MetaTags } from "svelte-meta-tags";

    let { data } = $props();

    console.log(data.util)

    let { utilPage, util } = data;

    import { codeToHtml, createHighlighter } from 'shiki';
	import { onMount } from "svelte";

	onMount(async () => {
		const options = {
			toggle: 2000
		};

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
			langs: ['html', 'js', 'json']
		});

		document.querySelectorAll('textarea.shiki-code').forEach(async (v) => {
			let hast = await highlighter.codeToHtml(v.value, {
				lang: v.dataset.lang,
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
				defaultColor: 'mocha'
			});
			let el = document.createElement('div');
			el.innerHTML = hast;
			v.parentElement?.appendChild(el);
			v.remove();
		});
	});
</script>

<svelte:head>
    <title>{util.utilName}</title>
</svelte:head>

<MetaTags
    openGraph = {{
        title: "jb's utils: " + util.utilName,
        description: util.utilDesc
    }}
/>

{console.log(utilPage)}
<svelte:component this={utilPage.default}></svelte:component>