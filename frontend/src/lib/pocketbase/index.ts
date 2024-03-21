import PocketBase, { type BaseModel, RecordService, type RecordListOptions } from 'pocketbase';
import { PUBLIC_PB_URL } from '$env/static/public';

export type Todo = BaseModel & {
	description: string;
	done: boolean;
};

export type CreateTodo = Pick<Todo, 'description' | 'done'>;
export type UpdateTodo = Partial<Todo>;

interface TypedPocketBase extends PocketBase {
	collection(name: string): RecordService;
	collection(name: 'todos'): RecordService<Todo>;
}

export const createClient = () => new PocketBase(PUBLIC_PB_URL) as TypedPocketBase;

export async function list<T>(
	collection: string,
	page: number = 1,
	size: number = 10,
	options: RecordListOptions = {}
) {
	const pb = createClient();
	return await pb.collection(collection).getList<T>(page, size, options);
}

export async function save<T extends Partial<BaseModel>>(
	collection: string,
	record: T,
	create = false
) {
	const pb = createClient();
	if (record.id && !create) {
		return await pb.collection(collection).update(record.id, record);
	}
	return await pb.collection(collection).create(record);
}

export async function remove<T extends Pick<BaseModel, 'id'>>(collection: string, record: T) {
	const pb = createClient();
	return await pb.collection(collection).delete(record.id);
}
