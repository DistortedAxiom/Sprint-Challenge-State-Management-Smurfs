1. What problem does the context API help solve?

Context API provides us a way to pass data through the component tree without having to pass props manually down each component (props-drilling).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* Actions dispatches payload of information that send data from the application to the store, this can be used by the reducer to respond to the action event based on its "type".
* Reducers tells the application how the state changes depend on the action the actions that were sent to the store.
* The store is what holds the application state, it brings the actions and reducers together which allows us to connect components to them.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is shared across many components, it can be seen as the "global state". Component state is state is held inside in the component itself.
You want to use application state when you want to reference a state multiple times while component state is good when you are only using some state within that component only.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that take our action-creators and return a function instead of an object. This allow us to handle async actions and have multiple dispatches.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux was fun to learn, I've finally understand its purpose and how to utilize it in an application / project. While it requires a lot to setup unlike context API, I can definitely see why it can be valuable in projects, especially larger ones.
