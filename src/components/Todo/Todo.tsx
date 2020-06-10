import React from "react";
import { TodoItem } from "../../recoil/todos/todosState";

export type TodoProps = TodoItem;

export const Todo: React.FC<TodoProps> = (props) => {
    const { label } = props;

    return (
        <div>
            {label}
        </div>
    )
};
