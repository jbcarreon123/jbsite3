<div class="grid grid-cols-1 justify-items-center pt-4 pb-4 text-center">
    <p>©️ 2024-2025 jbcarreon123. All rights reserved. <a href="https://rice.place/manifesto.html" target="_blank" rel="noopener">Copying is an act of hate.</a></p>
    <p>Blog posts are licensed under CC BY-SA 4.0 unless specified.</p>
    <p>Made using <a href="https://bun.sh" target="_blank" rel="noopener">Bun</a> and <a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>. Hosted in <a href="https://nekoweb.org" target="_blank" rel="noopener">nekoweb</a>.</p>

    <div class="fbtn grid grid-flow-col pt-2 gap-2">
        <img src="/imgs/buttons/anybrowser.gif" alt="Any modern browser and OS!" title="This site is best viewed in any modern browser and OS!" />
        <a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL">
            <img src="/imgs/buttons/smil.svg" alt="Enhanced with SMIL :D" title="Enhanced with SMIL :D" />
        </a>
        <a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://nekoweb.org/"
            ><img
                src="https://nekoweb.org/assets/buttons/button5.gif"
                loading="lazy"
                alt="Nekoweb"
                title="Nekoweb (button by maxpixels)"
            /></a
        >
        <a href="https://districts.nekoweb.org/" target="_blank"><img alt="Nekoweb Districts" title="Nekoweb Districts" src="https://districts.nekoweb.org/img/districts002.png"></a>
        <img src="/imgs/buttons/mobilefriendly.png" alt="Mobile friendly" title="This site is mobile friendly!" />
    </div>
</div>

<style>
	img {
		image-rendering: pixelated;
		position: relative;
		z-index: 2;
	}

	img:hover {
		z-index: 50;
		transform: scale(1.25);
		filter: blur(0);
	}

	.fbtn:has(img:hover) img:not(:hover) {
		z-index: 1;
		filter: brightness(0.25) blur(1px);
	}
</style>
