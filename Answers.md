# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library for building web user interfaces. It solves the problem of changing the DOM when data changes in the state or props. As an example, the whatsapp web app consists of a number of components put together to achieve the final ui. When users send a message, the ui updates by showing messages on the screen.

1. What does it mean to think in react?

Thinking in react means breaking down your web ui into smaller components. These smaller components can then be put together to form the UI of our web app.

1. Describe state.

State is an object where we store data related to a given component.

1. Describe props.

Props refer to the data we pass between components or from component to component

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects is anything that affects something outside the scope of the function being executed. These changes can be synced using hooks in react (useEffect and useState hook). The data in state can be updated based on state change using useState
