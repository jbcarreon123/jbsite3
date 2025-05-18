<script>
    const name = __NAME__;
    const version = __VERSION__;
</script>

<div class="grid grid-cols-1 justify-items-center pt-4 pb-4 text-center">
    <p>jbSite3 {version} © 2024-2025 jbcarreon123. All rights reserved.</p>
    <p><a href="https://maxpixels.moe/manifesto" target="_blank" rel="noopener">Copying is an act of theft, while taking inspiration is the true act of love.</a></p>
    <p>Content are licensed under CC BY-SA 4.0 unless specified.</p>
    <p>Made using <a href="https://bun.sh" target="_blank" rel="noopener">Bun</a> and <a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>. Hosted in <a href="https://nekoweb.org" target="_blank" rel="noopener">nekoweb</a>.</p>

    <div class="fbtn flex flex-wrap justify-center pt-2 gap-2">
        <a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL">
            <img src="/jbsite3/imgs/buttons/smil.svg" alt="Enhanced with SMIL :D" title="Enhanced with SMIL :D" />
        </a>
        <a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://team.indieseas.net">
            <img
                src="/jbsite3/imgs/buttons/indiefellas.svg"
                alt="Indiefellas"
                title="indieweb devs with no idea what they're doing"
            />
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
        <img src="/jbsite3/imgs/buttons/mobilefriendly.png" alt="Mobile friendly" title="This site is mobile friendly!" />
    </div>
</div>

<style>
	img {
		image-rendering: pixelated;
		position: relative;
		z-index: 2;

		width: 88px;
		height: 31px;
	}

	img:hover {
		z-index: 50;
		transform: scale(1.25);
		filter: blur(0);
	}

	.fbtn:has(img:hover) img:not(:hover) {
		z-index: 1;
        opacity: 0.5;
		filter: blur(1px);
	}
</style>
