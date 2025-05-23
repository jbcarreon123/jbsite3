<svelte:options runes={true} />

<script lang="ts">
	let isReducedMotion = $state<Boolean>(true);

	let nekoPosX = $state(32);
	let nekoPosY = $state(32);

	let mousePosX = $state(0);
	let mousePosY = $state(0);

	let frameCount = $state(0);
	let idleTime = $state(0);
	let idleAnimation: any = $state(null);
	let idleAnimationFrame = $state(0);

	const nekoSpeed = 10;

    interface SpriteSetsType {
        idle: number[][];
        alert: number[][];
        scratchSelf: number[][]; 
        scratchWallN: number[][];
        scratchWallS: number[][];
        scratchWallE: number[][];
        scratchWallW: number[][];
        tired: number[][];
        sleeping: number[][];
        N: number[][];
        NE: number[][];
        E: number[][];
        SE: number[][];
        S: number[][];
        SW: number[][];
        W: number[][];
        NW: number[][];
    }

	const spriteSets: SpriteSetsType = {
		idle: [[-3, -3]],
		alert: [[-7, -3]],
		scratchSelf: [
			[-5, 0],
			[-6, 0],
			[-7, 0]
		],
		scratchWallN: [
			[0, 0],
			[0, -1]
		],
		scratchWallS: [
			[-7, -1],
			[-6, -2]
		],
		scratchWallE: [
			[-2, -2],
			[-2, -3]
		],
		scratchWallW: [
			[-4, 0],
			[-4, -1]
		],
		tired: [[-3, -2]],
		sleeping: [
			[-2, 0],
			[-2, -1]
		],
		N: [
			[-1, -2],
			[-1, -3]
		],
		NE: [
			[0, -2],
			[0, -3]
		],
		E: [
			[-3, 0],
			[-3, -1]
		],
		SE: [
			[-5, -1],
			[-5, -2]
		],
		S: [
			[-6, -3],
			[-7, -2]
		],
		SW: [
			[-5, -3],
			[-6, -1]
		],
		W: [
			[-4, -2],
			[-4, -3]
		],
		NW: [
			[-1, 0],
			[-1, -1]
		]
	};

	let lastFrameTimestamp: number = $state(0);

    let backgroundPosition = $state('160px 32px');

	function onMouseMove(event: MouseEvent) {
		mousePosX = event.clientX;
		mousePosY = event.clientY;
	}

	function onAnimationFrame(timestamp: any) {
		// Stops execution if the neko element is removed from DOM

		if (!lastFrameTimestamp) {
			lastFrameTimestamp = timestamp;
		}
		if (timestamp - lastFrameTimestamp > 100) {
			lastFrameTimestamp = timestamp;
			frame();
		}
		window.requestAnimationFrame(onAnimationFrame);
	}

	function setSprite(name: any, frame: any) {
        const sprite = spriteSets[name as keyof SpriteSetsType][frame % spriteSets[name as keyof SpriteSetsType].length];
        backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
	}

	function resetIdleAnimation() {
		idleAnimation = null;
		idleAnimationFrame = 0;
	}

	function idle() {
		idleTime += 1;

		// every ~ 20 seconds
		if (idleTime > 10 && Math.floor(Math.random() * 200) == 0 && idleAnimation == null) {
			let avalibleIdleAnimations = ['sleeping', 'scratchSelf'];
			if (nekoPosX < 32) {
				avalibleIdleAnimations.push('scratchWallW');
			}
			if (nekoPosY < 32) {
				avalibleIdleAnimations.push('scratchWallN');
			}
			if (nekoPosX > window.innerWidth - 32) {
				avalibleIdleAnimations.push('scratchWallE');
			}
			if (nekoPosY > window.innerHeight - 32) {
				avalibleIdleAnimations.push('scratchWallS');
			}
			idleAnimation =
				avalibleIdleAnimations[Math.floor(Math.random() * avalibleIdleAnimations.length)];
		}

		switch (idleAnimation) {
			case 'sleeping':
				if (idleAnimationFrame < 8) {
					setSprite('tired', 0);
					break;
				}
				setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
				if (idleAnimationFrame > 192) {
					resetIdleAnimation();
				}
				break;
			case 'scratchWallN':
			case 'scratchWallS':
			case 'scratchWallE':
			case 'scratchWallW':
			case 'scratchSelf':
				setSprite(idleAnimation, idleAnimationFrame);
				if (idleAnimationFrame > 9) {
					resetIdleAnimation();
				}
				break;
			default:
				setSprite('idle', 0);
				return;
		}
		idleAnimationFrame += 1;
	}

	function frame() {
		frameCount += 1;
		const diffX = nekoPosX - mousePosX;
		const diffY = nekoPosY - mousePosY;
		const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

		if (distance < nekoSpeed || distance < 48) {
			idle();
			return;
		}

		idleAnimation = null;
		idleAnimationFrame = 0;

		if (idleTime > 1) {
			setSprite('alert', 0);
			// count down after being alerted before moving
			idleTime = Math.min(idleTime, 7);
			idleTime -= 1;
			return;
		}

		let direction;
		direction = diffY / distance > 0.5 ? 'N' : '';
		direction += diffY / distance < -0.5 ? 'S' : '';
		direction += diffX / distance > 0.5 ? 'W' : '';
		direction += diffX / distance < -0.5 ? 'E' : '';
		setSprite(direction, frameCount);

		nekoPosX -= (diffX / distance) * nekoSpeed;
		nekoPosY -= (diffY / distance) * nekoSpeed;

		nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
		nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);
	}

	$effect(() => {
		isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		document.addEventListener('mousemove', onMouseMove);
		const animationFrameHandle = window.requestAnimationFrame(onAnimationFrame);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			window.cancelAnimationFrame(animationFrameHandle);
		};
	});
</script>

{#if !isReducedMotion}
	<div
		style={`left: ${nekoPosX - 16}px; top: ${nekoPosY - 16}px; background-position: ${backgroundPosition};`}
		class="oneko"
		aria-hidden="true"
	></div>
{/if}

<style>
	div {
		width: 32px;
		height: 32px;
		position: fixed;
		pointer-events: none;
		image-rendering: pixelated;
		z-index: 9999;
		background-image: url($lib/oneko/oneko.gif);
	}
</style>
