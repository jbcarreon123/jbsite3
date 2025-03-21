<script>
    import { codeToHtml, createHighlighter } from 'shiki';
	import { addCopyButton } from 'shiki-transformer-copy-button';
	import {
		transformerMetaHighlight,
		transformerMetaWordHighlight,
		transformerNotationHighlight,
		transformerNotationWordHighlight
	} from '@shikijs/transformers';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
    
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
            langs: ['html', 'js']
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
                v.remove()
            })
    })
</script>

<h1>Comment Widget Auto Reload Addon</h1>
<p>
    This thing is just a really simple modification on 
    <a href="https://virtualobserver.moe/ayano/comment-widget">Ayano's Comment Widget</a> 
    that makes it so the widget auto reloads when the user submits a comment. This is made
    because I can't stand why it would need a reload when you submit a comment.
</p>
<p>
    To implement this to your site, here's the steps:
</p>
<div class="pl-12">
    <ol class="list-decimal">
        <li>
            Find the input that's have the id <code>c_form</code>. That should look like this:
            <textarea readonly data-lang="html" class="shiki-code w-full"><form id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true;" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${'{'}s_formId{'}'}/formResponse"></form></textarea>
        </li>
        <li>
            Now, add <code>refreshForm();</code> on the <code>onsubmit</code> attribute. That should look like this:
            <textarea readonly data-lang="html" class="shiki-code w-full"><form id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true; refreshForm();" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${'{'}s_formId{'}'}/formResponse"></form></textarea>
        </li>
        <li>
            Then, we're now making the JS function that will reload it. It's just a simple 3 lines. Put this on the script.
            Modify the <code>1500</code> to how many milliseconds do you want before it reloads the widget.
            <textarea readonly data-lang="js" class="shiki-code w-full">function refreshForm() {'{'}
    setTimeout(getComments, 1500);
{'}'}</textarea>
        </li>
    </ol>
</div>
<p>And that's pretty much it!</p>