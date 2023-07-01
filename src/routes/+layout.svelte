<script lang="ts">
	import '../app.css';
</script>

<header class="flex items-center h-20 px-12 justify-between bg-white">
	<h1 class="font-semibold text-lg">David Woolf</h1>

	<nav>
		<a class="underline hover:no-underline" href="https://github.com/davidwoolf" target="_blank"
			>Github</a
		>
	</nav>
</header>

<slot />

<style lang="postcss">
	:global(body) {
		-webkit-font-smoothing: antialiased;
	}
</style>
