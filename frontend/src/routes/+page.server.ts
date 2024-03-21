import { save, remove, type CreateTodo, type UpdateTodo } from '$lib/pocketbase';
import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ fetch, request }) => {
		const description = (await request.formData()).get('description')?.toString();

		if (description === undefined || description.length < 1)
			return fail(400, { description, missing: true });

		try {
			await save<CreateTodo>(fetch, 'todos', { description, done: false });
		} catch (e) {
			return fail(400, { error: 'something fucky' });
		}
		return { success: true };
	},
	update: async ({ fetch, request }) => {
		const fd = await request.formData();
		const id = fd.get('id')?.toString();
		const description = fd.get('description')?.toString();
		const done = fd.get('done')?.toString() === 'on';

		try {
			await save<UpdateTodo>(fetch, 'todos', { id, description, done });
		} catch (e: unknown) {
			return fail(400, { error: 'something fucky' });
		}
		return { success: true };
	},
	delete: async ({ fetch, request }) => {
		const id = (await request.formData()).get('id')?.toString();
		if (id === undefined) return fail(400, { id, missing: true });
		try {
			await remove(fetch, 'todos', { id });
		} catch (e) {
			return fail(400, { error: 'something fucky' });
		}
		return { success: true };
	}
};
