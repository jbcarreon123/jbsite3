<script lang="ts">
	import autoAnimate from "@formkit/auto-animate";
	import { onMount } from "svelte";

    let { imagePath = $bindable(), alt } = $props()

    let imgViewer: HTMLDivElement;

    function onBgClick() {
        console.log('clicked')
        imgViewer.classList.add('hide')
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            imagePath = '';
        } else {
            setTimeout(function () {
                imagePath = '';
            }, 250)
        }

        document.body.style.overflow = ''
    }

    function onKeyUp(ev: KeyboardEvent) {
        if (ev.key == "Escape" || ev.key == "ESC") {
            onBgClick()
        }
    }

    function removeShow() {
        setTimeout(function() { imgViewer.classList.remove('show') }, 250)

        document.body.style.overflow = 'hidden'
    }

    onMount(() => {
        document.addEventListener('keyup', (ev) => {
            if (ev.key == "Escape" || ev.key == "ESC") {
                onBgClick()
            }
        })
    })
</script>

<div>
    {#if imagePath != ''}
    <div class="z-50 imgvwr show" bind:this={imgViewer}>
        {removeShow()}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div class="bg" onclick={onBgClick} onkeyup={onKeyUp} role="dialog"></div>
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div class="contentContainer z-60" onkeyup={onKeyUp} onclick={onBgClick} role="dialog">
            <div class="content max-w-[95vw] md:max-w-[75vw] text-center items-center flex justify-center flex-col gap-2">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <a href={imagePath}><img src={imagePath} alt={alt} /></a>
                <p>{alt} - <a href={imagePath} target="_blank" rel="noopener">Go to raw</a></p>
            </div>
        </div>
    </div>
    {/if}
</div>

<style>

    div :global {
        .imgvwr.hide {
            animation-name: hide;
            animation-duration: 250ms;
        }

        .imgvwr.show {
            animation-name: show;
            animation-duration: 250ms;
        }

        .imgvwr.hide .content {
            animation-name: hide2;
            animation-duration: 250ms;
        }

        .imgvwr.show .content {
            animation-name: show2;
            animation-duration: 250ms;
        }

        @media (prefers-reduced-motion) {
            .imgvwr.hide, .imgvwr.show, .imgvwr.hide .content, .imgvwr.show .content {
                animation: none;
            }
        }
    }

    @keyframes hide {
        from { filter: opacity(1); }
        to { filter: opacity(0); }
    }

    @keyframes show {
        from { filter: opacity(0); }
        to { filter: opacity(1); }
    }

    @keyframes hide2 {
        from { transform: scale(1); }
        to { transform: scale(0.75); }
    }

    @keyframes show2 {
        from { transform: scale(0.95); }
        to { transform: scale(1); }
    }

    .imgvwr {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
    }

    .imgvwr .contentContainer {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: center;
        place-items: center;
        width: 100%;
        height: 100%;
    }

    .imgvwr .bg {
        width: 100vw;
        background: rgb(var(--ctp-mantle));
        height: 100vh;
        overflow: hidden;
        filter: opacity(0.75);
    }
</style>