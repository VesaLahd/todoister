<script lang="ts">
	export let query: string = '';
</script>

<form data-sveltekit-keepfocus>
	<input type="search" name="query" value={query} />
	<button type="submit">Search</button>
</form>

<style>
	/* your styles go here */
</style>
