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


## Contents

01.[React Fundamental](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/01)

02. [Setup](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/02)

03. [Data-flow with props](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/03)

04. [Pure Function](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/04)

05. [This keyword](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/05)

06. [Stateless functional components](https://github.com/xgirma/tyler-react-fundamentals/tree/develop/06)

07. [Life Cycle Events + Ajax](https://github.com/xgirma/tyler-react-fundamentals/tree/b.07.life.cycle/07)

08. [React Router V4](https://github.com/xgirma/tyler-react-fundamentals/tree/b.08.react.router.v4/08)

09. [Forms and Encapsulation in React](https://github.com/xgirma/tyler-react-fundamentals/tree/b.09.forms/09)

10. [Dynamic rendering + query params](https://github.com/xgirma/tyler-react-fundamentals/tree/b.10.dynamic.rendering.query.params/10)

11. [Axios Promises and the github API](https://github.com/xgirma/tyler-react-fundamentals/tree/b.11.axios.promises.and.the.github.api/11)

12. [Composition via props.children](https://github.com/xgirma/tyler-react-fundamentals/tree/b.12.composition.via.props.childeren/12)

13. [Building a Highly Reusable React Component](https://github.com/xgirma/tyler-react-fundamentals/tree/b.13.building.highly.reusable.component/13)

14. [Building for Production + Hosting](https://github.com/xgirma/tyler-react-fundamentals/tree/b.14.building.for.production.hosting/14)