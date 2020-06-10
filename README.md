# recoil-experiments

Recoil, a minimal, fast and flexible state-management library that has Reactish API, semantics and behavior. Facebook’s employees have been using this library internally to handle performance-oriented apps.

Recoil lets you share data from atoms (shared state) that flow through selectors (pure functions) down into React components. Atoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously.

# Goal

This repo just a playground and attempt to find design patterns which can fit well with recoil state management

Current Idea is to try out similar to redux-ducks approach with separated state/actions and selectors and maybe HOC to connect them without extra boilerplate

# Challenges

- Actions with internal selectors, as they requires to list them in the dependency list they will re-create callback everytime when selector updated, which is fine for events, but makes it tricky to use them with useEffect ans simmilar hooks, and we cant really simulate didMount with multiple "actions" ie: 
```
 const addTodoWithInternalSelectorToSelectTodos = useAddTodo();
 React.useEffect(() => {
        addTodoWithInternalSelectorToSelectTodos("ToDo 1");
        addTodoWithInternalSelectorToSelectTodos("ToDo 2");
        addTodoWithInternalSelectorToSelectTodos("ToDo 3");
        addTodoWithInternalSelectorToSelectTodos("ToDo 4");
        addTodoWithInternalSelectorToSelectTodos("ToDo 5");
    }, [addTodo]);
```
as expected in this case it won't work properly.
