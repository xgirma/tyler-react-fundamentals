# React Fundamental 

## Intro to the React Ecosystem

    Composition
    Unidirectional Dataflow
    Declarative
    Explicit Mutations
    Just JavaScript
    
Composition of component. React Components can be composed just like functions can be composed.

Imperative tell the computer HOW we want to do stuff. 

Declarative tell the computer WHAT we want to do stuff. Abstraction. 

Declarative 

    Reduce side effects
    Minimize mutablity 
    More readable code
    Less bugs
    
React is declarative *for the most part*.

Explicit mutation: whenever we need to update the `stata` in our application we have to call `setState()`. SetState is going to update state and also kick off a *re-render*. Re-render updates the user-interface. Note that, we are not setting listeners, we are EXPLICITLY calling `setState()` we know exactly what our user-interface is going to update, because that is what we are telling React to do whenever we call `setState()`.

Piecing the Puzzle

    React
    React Router
    Webpack
    Babel
    Axios

React Router map a component to a specific url. Route is component and link is also a component.

Webpack will take our entry component and bundle our code.

Babel a code transformer. JSX -> regular JavaScript.

Axios for making AJAX request. 
