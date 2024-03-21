<script lang="ts">
	import Search from '../lib/components/search.svelte';
	import TodoList from '../lib/components/todo-list.svelte';
	import Pagination from '../lib/components/pagination.svelte';
	import NewTodo from '../lib/components/new-todo.svelte';
	import { page } from '$app/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	const paginationUrl = (p: number) => {
		const url = new URL($page.url);
		url.searchParams.set('page', p.toString());
		return url.toString();
	};
</script>

<main>
	<Search />

	<NewTodo />

	<TodoList todos={data.items} />

	<Pagination page={data.page} totalPages={data.totalPages} urlFn={paginationUrl} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
