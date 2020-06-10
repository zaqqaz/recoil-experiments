import * as React from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "./todosState";


export function useAddTodo() {
    const setTodoList = useSetRecoilState(todosState);

    return React.useCallback(
        (label: string) => {
            setTodoList((oldTodoList) => [
                ...oldTodoList,
                { label },
            ])
        },
        [setTodoList]
    );
}
