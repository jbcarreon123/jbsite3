<script>
	import autoAnimate from '@formkit/auto-animate';
	import { isBlog, blogToc } from '$lib/stores/blogTocStore';
	import { onMount } from 'svelte';

	function createNestedList(headings) {
		const root = [];
		const stack = [];

		headings.forEach((heading) => {
			if (heading.element !== "LI") {
				const level = parseInt(heading.element.slice(1));
				const item = { ...heading, children: [] };

				while (stack.length && parseInt(stack[stack.length - 1].element.slice(1)) >= level) {
					stack.pop();
				}

				if (stack.length) {
					stack[stack.length - 1].children.push(item);
				} else {
					root.push(item);
				}

				stack.push(item);
			}
		});

		console.log(root)
		console.log(stack)
		return root;
	}

	function renderList(items) {
		return `<ul>${items
			.map(
				(item) =>
					`<li><a href="${item.slug}">${item.name}</a>${
						item.children.length ? renderList(item.children) : ''
					}</li>`
			)
			.join('')}</ul>`;
	}
</script>

{#if $isBlog && createNestedList(blogToc).length < 1}
	<div id="toc" class="w-full" use:autoAnimate>
		<div class="p-1.5">
			<h1 class="nf headercolor mt-[-6px] pb-2 text-2xl">Table of Contents</h1>
			{@html renderList(createNestedList($blogToc))}
		</div>
	</div>
{/if}

<style>
	#toc :global {
		ul {
			list-style: revert;
			padding: revert;
		}
	}
</style>
