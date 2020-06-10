import { selector } from "recoil";
import { todosState } from "./todos/todosState";

export const selectTodos = selector({
    key: 'selectTodos',
    get: ({ get }) => {
        const todos = get(todosState);

        return todos.filter((todo) => todo.label === "ToDo 1");
    }
});
