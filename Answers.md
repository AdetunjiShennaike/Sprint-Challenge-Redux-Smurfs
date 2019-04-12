1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  map, filter, reduce
  object.create or the spread operator

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  the store keeps all of the data that would have been in state or props inside of it and passes the data to all other parts of the application when called. the reducers perform tasks based on which actions are called and puts the information it receives into the store. actions are tasks that have to be done when called upon within the code, they are the functions that help make the app work. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  application state is global and component state is local. we would use component state when something has to be done to the data to be properly used within that component but not necessarily anywhere else. all other times we would use application state since it would be easier to access for all components

1.  What is middleware?
  software that acts as a bridge between an operating system or database and applications, especially on a network.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  redux thunk allows us to handle async requests, so using this we can have actions that are functions inside of functions like the axios request using dispatch. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
  coincidentally the link up is called connect haha connect connects the two like a nice bridge connects two cities