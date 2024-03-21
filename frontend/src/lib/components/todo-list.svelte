<script lang="ts">
	import type { Todo } from '$lib/pocketbase';
	import TodoItem from './todo.svelte';

	export let todos: Todo[] = [];
</script>

<ul>
	{#each todos as todo (todo.id)}
		<TodoItem {todo} />
	{:else}
		<p>No items found</p>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
</style>
