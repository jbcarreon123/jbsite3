<svelte:head>
    <title>Comment Widget Markdown Addon</title>
</svelte:head>

<h1>Comment Widget Markdown Addon</h1>
<p>
    This thing is a modification to
    <a href="https://virtualobserver.moe/ayano/comment-widget">Ayano's Comment Widget</a>
    to allow your users to use Markdown on their comments. It uses Showdownjs for the Markdown
    parsing, and DOMPurify for purifying user comments client-side.
</p>
<p>
    Note that this is a client-side addon and won't sanitize comments server side. I'm working on a solution but this is I think sufficient enough unless the bad actor got access to your files and managed to update your site to remove sanitization or something.
</p>
<p>
    To implement this to your site, here's the steps:
</p>
<div class="pl-12">
    <ol class="list-decimal">
        <li>
            Get <a href="https://showdownjs.com/">Showdownjs</a> and <a href="https://github.com/cure53/DOMPurify">DOMPurify</a>. I recommend grabbing the min versions
            as those are the most recommended way to use these libraries. Also if you want, also grab the source maps for the minified scripts.
        </li>
        <li>
            Include both of them above where the comment script is embedded, like this:
            <textarea readonly data-lang="html" class="shiki-code w-full border"><script src="/lib/purify.min.js"></script>
<script src="/lib/showdown.min.js"></script>
<script src="/lib/comment-widget.js" defer></script>
<div id="c_widget"></div></textarea>
        </li>
        <li>
            Put these below the configuration lines. These will be the configuration
            variables for Showdownjs and DOMPurify, respectively. I recommend the DOMPurify
            config options below, but you can refer to <a href="https://github.com/cure53/DOMPurify#can-i-configure-dompurify">this FAQ on DOMPurify's GitHub</a>
            of how to configure DOMPurify for your needs.
            <textarea readonly data-lang="js" class="shiki-code w-full border">var converter = new showdown.Converter()
DOMPurify.setConfig(
    {'{'}
        USE_PROFILES: {'{'} html: true {'}'},
        FORBID_TAGS: ['style'],
        FORBID_ATTR: ['style', 'class', 'aria-hidden']
    {'}'}
)</textarea>
        </li>
        <li>
            Now, find the <code>createComment</code> function, then find the comment that says <code>// Text content</code>.
            We need the code below that, until above <code>return comment;</code> That should look like this:
            <textarea readonly data-lang="js" class="shiki-code w-full border">// Text content
let text = document.createElement('p');
let filteredText = data.Text;
if (s_wordFilterOn) {'{'}filteredText = filteredText.replace(v_filteredWords, s_filterReplacement){'}'}
text.innerText = filteredText;
text.className = 'c-text';
comment.appendChild(text);</textarea>
        </li>
        <li>
            Now, let's add the Markdown rendering. <b>Process it after the word filter as that might break stuff!</b>
            You can add it by appending this above <code>text.innerText = filteredText;</code>:
            <textarea readonly data-lang="js" class="shiki-code w-full border">filteredText = converter.makeHtml(filteredText);</textarea>
        </li>
        <li>
            Then, let's sanitize the rendered message. <b>Process it after the renderer as that might expose some XSS vulnerabilities!</b>
            Append this below the above:
            <textarea readonly data-lang="js" class="shiki-code w-full border">filteredText = DOMPurify.sanitize(filteredText)</textarea>
        </li>
        <li>
            Lastly, let's modify the innerText to use innerHTML, like this:
            <textarea readonly data-lang="js" class="shiki-code w-full border">text.innerHTML = filteredText;</textarea>
        </li>
    </ol>
</div>
<p>And that's pretty much it!</p>