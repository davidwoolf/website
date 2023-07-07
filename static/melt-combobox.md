# Building a combobox for Melt UI

These past few weeks, I have been working on an accessible combobox with my good friend and amazing developer, [Eric Skram](https://github.com/vpr99). Check out the [full Melt UI library](https://www.melt-ui.com) and, if you’re interested, poke through the PR [here](https://github.com/melt-ui/melt-ui/pull/157).

## What is a combobox?

A combobox is an input and popup combination that provides filtering and keyboard navigation to select items. It's basically a supercharged select dropdown. Importantly, creating a combobox requires a lot of accessibility verification to ensure all people and standard computing interfaces (touch, mouse, and keyboard) can access it.

## General use

Melt UI is a library made for Svelte, (if you’re tied to react, check out [Radix](https://www.radix-ui.com). Here's an example of how you'd use the component (Melt refers to them as "builders"):

```html
<script lang="ts">
  import { createCombobox } from '@melt-ui/svelte';
  let items = ["Chocolate", "Vanilla", "Strawberry"];

  const { 
    filteredItems,
    input, 
    inputValue, 
    isSelected, 
    item, 
    menu, 
    open, 
  } = createCombobox({ items });
</script>

<label>
  <span>Choose your favorite flavor:</span>
  <input
    {...$input}
    placeholder="Enter a value..."
    use:input
    value={$inputValue}
  />
</label>

<div {...$menu} use:menu>
	<ul>
		{#if $open}
			{#each $filteredItems as flavor, index (index)}
				<li
					{...$item({ index, item: flavor })}
					use:item
				>
					{#if $isSelected(flavor)} ✅ {/if} 
					<span>{flavor}</span>
				</li>
			{/each}
		{/if}
	</ul>
</div>
```

I'd love if you checked it out!