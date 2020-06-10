import { atom } from "recoil";

export interface TodoItem {
    label: string;
}

export type Todos = TodoItem[];

export const todosState = atom<Todos>({
    key: 'todoListState',
    default: [],
});
