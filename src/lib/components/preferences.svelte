<script>
	import { browser } from '$app/environment';

	let isConfigThere = false;
	let enableOneko = $state(false);
	let disAnim = $state(false);
	let theme = $state("mocha");

	if (browser) {
		const configCookie = localStorage.getItem('config');
		if (configCookie) {
			isConfigThere = true;
			try {
				const config = JSON.parse(configCookie);
				enableOneko = config.enableOneko;
				disAnim = config.disAnim;
				theme = config.theme;
				// svelte-ignore state_referenced_locally
				if (!theme) {
					if (window.matchMedia('(prefers-color-scheme: light)').matches) {
						theme = 'latte'
					} else {
						theme = 'mocha'
					}
					saveConfig()
				}
				console.log(config)
			} catch (error) {
				console.error('Error parsing config cookie:', error);
			}
		}
		updateTheme();
	}

	function saveConfig() {
		const config = {
			enableOneko: enableOneko,
			disAnim: disAnim,
			theme: theme
		};
		localStorage.setItem('config', JSON.stringify(config));
		console.log(config)
		isConfigThere = true;
		updateTheme();
	}

	window.matchMedia('(prefers-color-scheme: light)').addEventListener("change", () => {
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			if (theme == 'mocha')
				theme = 'latte'
		} else {
			if (theme == 'latte')
				theme = 'mocha'
		}

		saveConfig()
	})

	window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener("change", (ev) =>{
		disAnim = ev.matches

		saveConfig()
	})

	let initialScriptExecuted = false;
	if (!isConfigThere && browser) {
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			theme = 'latte'
		} else {
			theme = 'mocha'
		}

		enableOneko = false;
		disAnim = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		saveConfig();
		initialScriptExecuted = true;
	}

	function updateTheme() {
		document.documentElement.classList.remove("mocha")
		document.documentElement.classList.remove("latte")
		document.documentElement.classList.remove("macchiato")
		document.documentElement.classList.remove("frappe")
		document.documentElement.classList.remove("gruvbox-dark")
		document.documentElement.classList.remove("gruvbox-light")
		document.documentElement.classList.remove("high-contrast-light")
		document.documentElement.classList.remove("high-contrast-dark")
		document.documentElement.classList.add(theme)
	}
</script>

<h1 class=" mt-[-6px] headercolor pb-2 text-2xl">Personalize</h1>
<div class="flex flex-col gap-2">
	<p>All of these stuff requires JS.</p>
	<div>
		<input type="checkbox" id="oneko" bind:checked={enableOneko} onchange={saveConfig} />
		<label for="oneko">Enable Oneko</label>
		<blockquote>
			<p>Note: Enabling Oneko on mobile might not work correctly.</p>
			<p>Requires a site refresh.</p>
		</blockquote>
	</div>
	<div>
		<input type="checkbox" id="anim" bind:checked={disAnim} onchange={saveConfig} />
		<label for="anim">Disable animated background</label>
		<blockquote>
			<p>Requires a site refresh.</p>
		</blockquote>
	</div>
	<div>
		<label for="theme">Select theme</label>
		<select id="theme" class="max-w-full" bind:value={theme} onchange={saveConfig}>
			<option value="mocha">CTP Mocha (Default Dark)</option>
			<option value="latte">CTP Latte (Default Light)</option>
			<option value="macchiato">CTP Macchiato</option>
			<option value="frappe">CTP Frappé</option>
			<option value="gruvbox-dark">Gruvbox (Dark)</option>
			<option value="gruvbox-light">Gruvbox (Light)</option>
			<option value="high-contrast-dark">High Contrast (Dark)</option>
			<option value="high-contrast-light">High Contrast (Light)</option>
		</select>
	</div>
</div>