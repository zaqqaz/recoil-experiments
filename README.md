# recoil-experiments

Recoil, a minimal, fast and flexible state-management library that has Reactish API, semantics and behavior. Facebook’s employees have been using this library internally to handle performance-oriented apps.

Recoil lets you share data from atoms (shared state) that flow through selectors (pure functions) down into React components. Atoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously.

# Goal

This repo just a playground and attempt to find design patterns which can fit well with recoil state management

Current Idea is to try out similar to redux-ducks approach with separated state/actions and selectors and maybe HOC to connect them without extra boilerplate

