<svelte:head>
    <title>About JB</title>
</svelte:head>

<h1>About me</h1>
<p>
	Hi there! I'm JB, the webbed master of this webbed site! I'm a 16 year old Filipino that does
	something on my free time! I loved the indie web as it shows the creativity of each person and
	lets them have fun!
</p>
<p>I enjoy coding something, listening to music, chatting and helping people!</p>

<div class="about-buttons flex flex-wrap gap-2 pt-2">
	<img src="/jbsite3/imgs/id/male.png" alt="Male" />
	<img src="/jbsite3/imgs/id/He_Him_They.png" alt="He/Him/They" />
	<img src="/jbsite3/imgs/id/16_years_old.png" alt="16 years old" />
	<img src="/jbsite3/imgs/id/filipino.png" alt="Filipino" />
	<img src="/jbsite3/imgs/id/eng_second_lang.png" alt="English is my second and preferred language!" />
	<img src="/jbsite3/imgs/id/left_handed.png" alt="Left-handed" />
	<img src="/jbsite3/imgs/id/rat.png" alt="Year of the Rat" />
</div>

<h1 class="mt-4">Albums I liked</h1>
<div id="albums" class="flex flex-wrap gap-2 pt-2">
    <a href="https://goodkid.bandcamp.com/album/good-kid-2" target="_blank">
        <img
            src="/jbsite3/imgs/albums/gk2.jpg"
            alt="Good Kid 2 by Good Kid"
            data-desc="especially Down with the King and Drifting"
        />
    </a>
    <a href="https://soundcloud.com/goodkidband/sets/good-kid-4" target="_blank">
        <img
            src="/jbsite3/imgs/albums/gk4.jpg"
            alt="Good Kid 4 by Good Kid"
            data-desc="especially Break, Dance Class, and Premier Inn"
        />
    </a>
    <a href="https://soundcloud.com/porter-robinson/sets/smile-d-2" target="_blank">
        <img
            src="/jbsite3/imgs/albums/smile_d.jpg"
            alt="SMILE:: D by Porter Robinson"
            data-desc="especially Cheerleader, Russian Roulette, and Perfect Pinterest Garden"
        />
    </a>
</div>

<h1 class="mt-4">My system specs</h1>
<div id="specs" class="grid grid-cols-1 md:grid-cols-2">
	<div>
		<h2>Main system (laptop)</h2>
		<table>
			<tbody>
				<tr>
					<td>Model</td>
					<td>Lenovo LOQ 15IAX9</td>
				</tr>
				<tr>
					<td>CPU</td>
					<td>Core i5-13450HX</td>
				</tr>
				<tr>
					<td>GPU</td>
					<td>Nvidia RTX 3050 6GB Mobile Refresh + Intel UHD Graphics</td>
				</tr>
				<tr>
					<td>RAM</td>
					<td>20GB DDR5-4800</td>
				</tr>
				<tr>
					<td>OS</td>
					<td>EndeavourOS / Windows 11</td>
				</tr>
				<tr>
					<td>Storage</td>
					<td>512GB SSD + 256GB SSD</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div>
		<h2>The Shitbox (second system)</h2>
		<table>
			<tbody>
				<tr>
					<td>Model</td>
					<td>Dell Vostro 270s</td>
				</tr>
				<tr>
					<td>CPU</td>
					<td>Core i3-2100</td>
				</tr>
				<tr>
					<td>GPU</td>
					<td>Intel HD Graphics</td>
				</tr>
				<tr>
					<td>RAM</td>
					<td>8GB DDR3-1333</td>
				</tr>
				<tr>
					<td>OS</td>
					<td>EndeavourOS</td>
				</tr>
				<tr>
					<td>Storage</td>
					<td>128GB SSD</td>
				</tr>
			</tbody>
		</table>
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

	.about-buttons:has(img:hover) img:not(:hover), #albums:has(img:hover) img:not(:hover) {
		z-index: 1;
		opacity: 0.5;
		filter: blur(1px);
	}

	tr td:last-child {
		padding-left: 8px;
	}

    #albums img {
        width: 128px;
        height: auto;
    }
</style>
