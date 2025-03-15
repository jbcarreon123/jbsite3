<script>
	import { onMount } from 'svelte';

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
</script>

<div class="btn-container flex w-[100%] flex-auto flex-wrap items-center justify-center gap-1">
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://dimden.dev/"
		><img
			src="https://dimden.dev/services/images/88x31.gif"
			loading="lazy"
			alt=""
			title="Dimden's Hotel"
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://nekoweb.org/"
		><img
			src="https://nekoweb.org/assets/buttons/button5.gif"
			loading="lazy"
			alt=""
			title="Nekoweb (button by maxpixels)"
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://status.cafe"
		><img
			src="https://status.cafe/assets/button.png"
			loading="lazy"
			alt=""
			title="Status Cafe"
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://thinliquid.dev"
		><img
			src="https://thinliquid.dev/thnlqd.png"
			loading="lazy"
			alt=""
			title="thinliquid's button"
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://pawpyrus.art"
		><img
			src="https://pawpyrus.art/graphics/siteButton.gif"
			loading="lazy"
			alt=""
			title="pawpyrus.art"
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://rice.place/"
		><img
			src="https://rice.nekoweb.org/button/riceplace.png"
			loading="lazy"
			alt=""
			title="rice.place"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://moosyu.nekoweb.org/"
		><img
			src="https://moosyu.nekoweb.org/assets/button.png"
			loading="lazy"
			title="Memecompanies/Moosyu: moosyus awesome button"
			alt=""
		/></a
	>
	<a target="_blank" rel="noopener" class="w-fit shrink-0" href="https://darkosparko.nekoweb.org/"
		><img
			src="https://darkosparko.nekoweb.org/rocket-button.gif"
			loading="lazy"
			alt=""
			title="darkosparko/Spark-Web: Rocket into the Spark-web!"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://max.nekoweb.org/"
		><img
			src="https://max.nekoweb.org/images/button.gif"
			loading="lazy"
			alt=""
			title="maxpixels: max's apartment"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://ddnikki.nekoweb.org"
		><img
			src="https://ddnikki.nekoweb.org/images/nikkibutton.gif"
			loading="lazy"
			alt=""
			title="DDNikki"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://drfred.nekoweb.org/"
		><img
			src="https://drfred.nekoweb.org/collection/buttons/sites/button-drfred.png"
			loading="lazy"
			alt=""
			title="Dr. Fred: Enter the Fredzone..."
		/></a
	>
	<a target="_blank" rel="noopener" href="https://ultrakill.nekoweb.org"
		><img
			src="https://ultrakill.nekoweb.org/awawawawa.png"
			loading="lazy"
			title="Sol/Ultrakill: click for a FREE gabriel plushie!"
			alt=""
		/></a
	>
	<a target="_blank" rel="noopener" href="https://moosyu.nekoweb.org/"
		><img
			src="https://moosyu.nekoweb.org/assets/button.png"
			loading="lazy"
			title="Memecompanies/Moosyu: moosyus awesome button"
			alt=""
		/></a
	>
	<a target="_blank" rel="noopener" href="https://july.lol"
		><img
			src="https://july.lol/img/lonelyjulybutton.gif"
			title="july.lol"
			loading="lazy"
			alt=""
		/></a
	>
	<a target="_blank" rel="noopener" href="https://mechagic.party/"
		><img
			src="https://mechagic.party/2images/1button.webp"
			loading="lazy"
			title="Mechagic's Fun Button"
			alt=""
		/></a
	>
	<a target="_blank" rel="noopener" href="https://joo.sh/"
		><img
			src="https://files.joo.sh/img/buttons/jooshRice.gif"
			title="joo.sh"
			alt=""
			loading="lazy"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://layercake.nekoweb.org/"
		><img src="https://files.catbox.moe/h7nelz.gif" title="Layercake" alt="" loading="lazy" /></a
	>
	<a href="https://beaus-silly-folder.nekoweb.org" target="_blank" rel="noopener" class="links"
		><img
			src="https://beaus-silly-folder.nekoweb.org/BSF.gif"
			title="Beau's Silly Folder"
			loading="lazy"
			alt=""
		/></a
	>
	<!-- <a href="https://xan.lol"><img src="https://xan.lol/button.avif" alt=""></a> -->
	<a href="https://toasty.place/" target="_blank" rel="noopener"
		><img
			src="https://toastofthesewn.nekoweb.org/images/buttons/pagebutton1.gif"
			alt=""
			loading="lazy"
			title="ToastofTheSewn"
		/></a
	>
	<a href="https://biofreak.world" target="_blank" rel="noopener"
		><img
			src="https://softatrocity.nekoweb.org/sitebuttons/biofreak-dark.png"
			alt=""
			loading="lazy"
			title="biofreak.world"
		/></a
	>
	<a href="https://amoebalous.net/" target="_blank"
		><img
			src="https://amoebalous.net/images/buttons/amoebalous.png"
			title="amoebalous.net"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://modularity.nekoweb.org/" target="_blank"
		><img
			src="https://modularity.nekoweb.org/mdlr.gif"
			alt=""
			title="modularity"
			loading="lazy"
		/></a
	>
	<a href="https://bang1338.nekoweb.org" target="_blank"
		><img
			src="https://bang1338.nekoweb.org/bang1338.gif"
			alt=""
			title="Bang1338"
			loading="lazy"
		/></a
	>
	<a href="https://bntarwarn.com/" target="_blank"
		><img
			src="https://bntarwarn.com/zz_img/buttons/bntarwarn.png"
			alt=""
			title="BNTarwarn"
			loading="lazy"
		/></a
	>
	<a href="https://metakabe.nekoweb.org/" target="_blank">
		<img
			src="https://metakabe.nekoweb.org/Buttons/kabebutton.gif"
			loading="lazy"
			alt=""
			title="metakabe^^"
		/>
	</a>
	<a href="https://ethxn.xyz/" target="_blank"
		><img src="/imgs/buttons/ethxn-button.gif" loading="lazy" alt="" title="ethxn" /></a
	>
	<a href="https://chataigne.nekoweb.org/" target="_blank"
		><img
			src="https://chataigne.nekoweb.org/button1.jpg"
			loading="lazy"
			alt=""
			title="Chataigne Online"
		/></a
	>
	<a href="https://avrelsleepy.nekoweb.org/" target="_blank"
		><img
			src="https://avrelsleepy.nekoweb.org/assets/webbuttons/avrel.png"
			alt=""
			title="avrelsleepy"
			loading="lazy"
		/></a
	>
	<a href="https://exclave.city/" target="_blank"
		><img
			src="https://exclave.city/images/button1.gif"
			title="Whey Isolate: Explore Exclave"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://reduxflakes.nekoweb.org/" target="_blank"
		><img
			src="https://reduxflakes.nekoweb.org/public/img/buttons/reduc_anim.gif"
			title="ReduxFlakes"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://libraryofgurkistan.nekoweb.org/" target="_blank"
		><img
			src="/imgs/buttons/hellomortal.png"
			title="LibraryofGurkistan: HELLO MORTAL"
			alt=""
			loading="lazy"
		/></a
	>
	<a target="_blank" rel="noopener" href="https://moosyu.nekoweb.org/"
		><img
			src="https://moosyu.nekoweb.org/assets/button.png"
			loading="lazy"
			title="Memecompanies/Moosyu: moosyus awesome button"
			alt=""
		/></a
	>
	<a href="https://ducdat0507.github.io/" target="_blank"
		><img
			src="/imgs/buttons/duducat.svg"
			title="duducat's corner on the interwebz!"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://theoliveoli.nekoweb.org/" target="_blank"
		><img
			src="/imgs/buttons/theoliveoli.png"
			width="88px"
			height="31px"
			title="TheOliveOli"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://yumeoi.skin/" target="_blank"
		><img
			src="/imgs/buttons/yumeo.gif"
			width="88px"
			height="31px"
			title="yumeoi.skin"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://eyeorb.net/" target="_blank"
		><img
			src="https://eyeorb.net/site_button.gif"
			width="88px"
			height="31px"
			title="eyeorb.net"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://rubybulbs.net/" target="_blank"
		><img
			src="https://rubybulbs.nekoweb.org/img/newbutt.png"
			width="88px"
			height="31px"
			title="rubybulbs.net"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://thepersonever.net/" target="_blank"
		><img
			src="https://thepersonever.net/thepersoneverbutton.gif"
			title="thepersonever"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://aoki553.nekoweb.org/" target="_blank"
		><img
			src="https://aoki553.neocities.org/nekoweb/deco/aoki553button.gif"
			title="aoki553"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://satorikeiko.nekoweb.org/" target="_blank"
		><img src="/imgs/buttons/satorikeiko.png" title="Satorikeiko" alt="" loading="lazy" /></a
	>
	<a href="https://ceat.nekoweb.org/" target="_blank"
		><img
			src="https://ceat.nekoweb.org/img/badges/badge.png"
			title="ceat"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://ivrry.nekoweb.org/" target="_blank"
		><img
			src="https://ivrry.nekoweb.org/assets/images/button.png"
			title="ivrry"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://raccoonbutt.com/" target="_blank"
		><img
			src="https://raccoonbutt.com/static/images/button.gif"
			title="raccoonbutt.com"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://olivia.nekoweb.org/" target="_blank"
		><img
			src="https://olivia.nekoweb.org/images/badge.png"
			title="Liv site"
			alt=""
			loading="lazy"
		/></a
	>
	<a href="https://nandraid.moe" target="_blank"
		><img src="/imgs/buttons/nandraid.gif" title="Randopaizer/Nandraid" alt="" loading="lazy" /></a
	>
	<a target="_blank" class="w-fit shrink-0" href="https://kalechips.net/responsive/index">
		<img src="/imgs/buttons/responsive-web-directory.png" alt="Responsive Web Directory" title="Responsive Web Directory" />
	</a>
</div>

<style>
	img {
		position: relative;
		image-rendering: pixelated;
		z-index: 2;
	}

	img:hover {
		z-index: 5;
		transform: scale(1.25);
		filter: blur(0);
	}

	.btn-container:has(img:hover) img:not(:hover) {
		z-index: 1;
		opacity: 0.5;
		filter: blur(2px);
	}
</style>
