import React from "react";
import { Todo } from "../Todo/Todo";
import { Todos as TodoList } from "../../recoil/todos/todosState";

export interface TodosProps {
    todos: TodoList;
}

export const Todos: React.FC<TodosProps> = (props) => {
    const {todos} = props;

    return (
        <>
            {todos.map(todo => <Todo key={Math.random()} {...todo}/>)}
        </>
    )
};
