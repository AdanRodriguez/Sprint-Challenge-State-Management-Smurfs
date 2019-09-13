1. What problem does the context API help solve?

It  provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Action: Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store               using store.dispatch().
-Reducers: Reducers specify how the application's state changes in response to actions sent to the store.
-Store: Everything that changes within your application will be represented by a single JavaScript Object known as the store. The store is know as a "single source of truth " becuase          it contains our state for our application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application State: managed at the top level. Would use it on big apps.
-Component State: managed at the component level. Would use it on smaller apps.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a middleware package that we can use to give Redux the ability to run asynchronous operations.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API because it made more sense right now but I think after I have a better grasp or redux, I might have a different thought.
