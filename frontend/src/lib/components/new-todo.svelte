<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form data-sveltekit-keepfocus use:enhance method="post" action="?/create">
	<input type="text" name="description" placeholder="What needs to be done?" />
	<button type="submit">Create</button>
</form>

<style>
	/* your styles go here */
</style>
