<script>
    import { codeToHtml, createHighlighter } from 'shiki';

    let splo;

	async function fChange() {
        let spl = document.querySelector('#text-split')?.value.split('')
        let tag = document.querySelector('#tag')?.value
        let att = document.querySelector('#attrs')?.value
        let voi = document.querySelector('#void')?.checked
        
        splo = spl.map((t, i) => {
            if (/^\s+$/.test(t)) {
                return t
            }
        
            return voi ?
                `<${tag}${att? ` ${att}` : ''}/>`.replaceAll('((i))', i).replaceAll('((v))', t) :
                `<${tag}${att? ` ${att}` : ''}>${t}</${tag}>`.replaceAll('((i))', i).replaceAll('((v))', t)
        }).join('\n')

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
            defaultColor: 'mocha'
        });

        document.querySelector('#out').innerHTML = hast
    }
</script>

<h1>Split It!</h1>
<p>
    Basically <a href="https://juneish.neocities.org/written/resources/?page=span-ify" target="_blank">juneish's span-ify</a>, but customizable!
</p>

<div id="cont" class="flex flex-row pt-4 gap-4">
    <div class="w-1/2">
        <form on:input|preventDefault={fChange}>
            <label for="text-split">Text to split</label><br />
            <textarea class="border w-full" id="text-split"></textarea>
            <br /><br />
            <label for="tag">The tag</label><br />
            <input type="text" class="border w-full" id="tag" value="span"/>
            <br />
            <input type="checkbox" id="void"> <label for="void">Void element?</label>
            <br /><br />
            <label for="attrs">Tag Attributes</label><br />
            <p>Use <code>((i))</code> for the index, and<br /><code>((v))</code> for the value (useful for void tags!)</p>
            <input type="text" class="border w-full" id="attrs" value="id='span-((i))'"/>
            
        </form>
    </div>
    <div id="out" class="h-full">
        Write something!
    </div>
</div>

<style>
    #cont div {
        width: calc(1 / 2 * 100%);
    }

    #out :global {
        .shiki {
            max-height: fit-content;
            max-width: 100%;
            width: 100%;
        }
    }
</style>