<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '$lib/pocketbase';

	export let todo: Todo;
</script>

<div>
	<form data-sveltekit-keepfocus use:enhance method="post" action="?/update">
		<input type="hidden" name="id" value={todo.id} />
		<input type="text" name="description" bind:value={todo.description} />
		<input type="checkbox" name="done" bind:checked={todo.done} />
		<button type="submit">Update</button>
	</form>
	<form use:enhance method="post" action="?/delete">
		<input type="hidden" name="id" value={todo.id} />
		<button type="submit">Delete</button>
	</form>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.hidden {
		display: none;
	}
</style>
