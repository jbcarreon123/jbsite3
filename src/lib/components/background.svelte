<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let ctx;
	let width;
	let height;
	let pixels = [];
	let isDarkMode = false;
	let animationRunning = false;
	let animId;
	let disAnim = $state(false);

	if (browser) {
		const configCookie = localStorage.getItem('config');
		if (configCookie) {
			try {
				const config = JSON.parse(configCookie);
				disAnim = config.disAnim;
				console.log(disAnim);
				console.log(config);
			} catch (error) {
				console.error('Error parsing config cookie:', error);
			}
		}
	}

	function cssVarToRGBA(variableName, alpha) {
		const root = document.documentElement;
		const rootStyles = getComputedStyle(root);
		let cssColor = rootStyles.getPropertyValue(variableName).trim();

		return `rgba(${cssColor}, ${alpha})`
	}

	onMount(async () => {
		window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener("change", (ev) =>{
			disAnim = ev.matches

			if (ev.matches) {
				cancelAnimationFrame(animId)
				ctx.clearRect(0, 0, width, height);
			}
		})

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		if (browser && !disAnim) {
			await tick();

			checkDarkMode();

			ctx = canvas.getContext('2d');

			resizeCanvas();

			for (let i = 0; i < 500; i++) {
				pixels.push({
					x: Math.random() * width,
					y: Math.random() * height,
					visible: false,
					alpha: 0
				});
			}
			//console.log(`${width}, ${height}, ${JSON.stringify(pixels)}`);

			animationRunning = true;
			animate();

			const resizeObserver = new ResizeObserver(resizeCanvas);
			resizeObserver.observe(document.documentElement);

			const darkModeObserver = new MutationObserver(checkDarkMode);
			darkModeObserver.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class']
			});

			return () => {
				resizeObserver.disconnect();
				darkModeObserver.disconnect();
				animationRunning = false;
			};
		}
	});

	function resizeCanvas() {
		if (browser && ctx && canvas && !disAnim) {
			const documentElement = document.getElementById('document');
			if (!documentElement) return;
			width = document.body.clientWidth;
			height = documentElement.clientHeight;
			canvas.width = width;
			canvas.height = height;
			canvas.style.maxWidth = `${width}px`;
			canvas.style.maxHeight = `${height}px`;

			pixels = [];
			for (let i = 0; i < 500; i++) {
				pixels.push({
					x: Math.random() * width,
					y: Math.random() * height,
					visible: false,
					alpha: 0
				});
			}
			//console.log(`${width}, ${height}, ${JSON.stringify(pixels)}`);
		}
	}

	function checkDarkMode() {
		if (browser) {
			isDarkMode = document.documentElement.classList.contains('dark');

			console.log(isDarkMode);
		}
	}

	function animate() {
		if (browser && !disAnim) {
			animId = requestAnimationFrame(animate);

			ctx.clearRect(0, 0, width, height);

			for (let i = 0; i < pixels.length; i++) {
				const pixel = pixels[i];

				if (Math.random() < 0.01) {
					pixel.visible = !pixel.visible;
					if (pixel.visible) {
						pixel.alpha = 0;
					}
				}

				if (pixel.visible) {
					if (pixel.alpha < 1) {
						pixel.alpha += 0.02;
					}

					ctx.fillStyle = cssVarToRGBA('--ctp-text', pixel.alpha);
					ctx.fillRect(pixel.x, pixel.y, 2, 2);
				} else if (pixel.alpha > 0) {
					pixel.alpha -= 0.02;
					ctx.fillStyle = cssVarToRGBA('--ctp-text', pixel.alpha);
					ctx.fillRect(pixel.x, pixel.y, 2, 2);
				}
			}
		}
	}

	$effect(() => {
		if (browser && !disAnim) {
			checkDarkMode();
		}
	})
</script>

<canvas title="background" bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -5;
		pointer-events: none;
		overflow: hidden;
	}
</style>
