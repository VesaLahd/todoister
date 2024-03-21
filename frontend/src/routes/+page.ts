import { list, type Todo } from '$lib/pocketbase';

export const load = async ({ url: { searchParams } }) => {
	const query = searchParams.get('query');
	const page = Number(searchParams.get('page')) || undefined;
	const size = Number(searchParams.get('size')) || undefined;

	const data = await list<Todo>('todos', page, size, {
		sort: '-created',
		...(query && query.length > 1 ? { filter: `(description~'${query}')` } : {})
	});

	return {
		...data
	};
};
