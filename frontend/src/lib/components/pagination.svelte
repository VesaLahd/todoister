<script lang="ts">
	export let page: number = 1;
	export let totalPages: number;
	export let urlFn: (page: number) => string;

	$: pages = new Array(totalPages).fill(0).map((_, i) => i + 1);
</script>

<nav>
	{#each pages as p (p)}
		<a href={urlFn(p)} class:active={p === page}>{p}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: 0.5rem;
	}
</style>
