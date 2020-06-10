
import { useRecoilValue } from "recoil";
import { selectTodos } from "../../recoil/selectors";
import React from "react";
import { useAddTodo } from "../../recoil/todos/todosActions";
import { Todos } from "./Todos";

export const TodosConnected = () => {
    //todo: There is know error in the console https://github.com/facebookexperimental/Recoil/issues/12
    const todos = useRecoilValue(selectTodos);
    const addTodo = useAddTodo();


    React.useEffect(() => {
        addTodo("ToDo 1");
        addTodo("ToDo 2");
        addTodo("ToDo 3");
        addTodo("ToDo 4");
        addTodo("ToDo 5");
    }, [addTodo]);

    return (
        <Todos todos={todos} />
    );
};
