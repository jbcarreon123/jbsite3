<h1>Accessibility</h1>
<p>jbSite is designed to be accessible on the start, and you should too for your site!</p>
<p>
    There's so many website in the indie web space that says they are reclaiming the web, but leaves out people who
    just need accessibility tools for visiting the web!
</p>
<p>
    I'm still improving the way jbSite is accessible, so this might change! But, here's the things you should expect on jbSite:
</p>

<div>
    <div>
        <h2>Colors and contrast</h2>
        <ul class="list-outside list-disc pl-12">
            <li>Every theme should meet the WCAG AAA rating for main text or AA rating for large text (or at least 7:1 contrast ratio on main text)</li>
            <li>Theme chooser, with 8 themes to choose for (5 dark, 3 light)</li>
            <li>Site respects user's preferred color scheme</li>
        </ul>
    </div>
    <div>
        <h2>Semantics</h2>
        <ul class="list-outside list-disc pl-12">
            <li>Main elements are defined semantically (main content as <code>&lt;main&gt;</code>, sidebar as <code>&lt;aside&gt;</code>, etc)</li>
            <li>Posts are defined semantically (<code>&lt;article&gt;</code>) and does not intentionally block brower's reader modes</li>
            <li>All non-decorative images have alt text</li>
            <li>Font sizes are defined using <code>em</code>s or <code>rem</code>s, not <code>px</code></li>
            <li>Pages have a set language (<code>en</code>)</li>
        </ul>
    </div>
    <div>
        <h2>Navigation</h2>
        <ul class="list-outside list-disc pl-12">
            <li>Site is navigatable with a keyboard</li>
            <li>Skip to content button with a single key press</li>
            <li>All pages must be mobile friendly</li>
            <li>All pages must be unbreakable even at 500% zoom</li>
            <li>No justified text (unless printing but who does that)</li>
        </ul>
    </div>
    <div>
        <h2>Annoyances</h2>
        <ul class="list-outside list-disc pl-12">
            <li>No autoplay, ever!</li>
            <li>Site respects user's preferred reduced motion mode</li>
        </ul>
    </div>
    <div>
        <h2>JavaScript</h2>
        <ul class="list-outside list-disc pl-12">
            <li>Essential pages does not require JavaScript</li>
        </ul>
    </div>
</div>

<style>
    ul li {
        padding-left: 0.25rem;
    }
</style>