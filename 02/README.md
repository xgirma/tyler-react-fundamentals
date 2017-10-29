# Setup

npm i -g create-react-app

create-react-app

Dependencies: 

    react
    react-dom

DevDependencies 

    babel-core // transformer ES6 -> ES5
    babel-loader 
    babel-preset-env // latest JavaScript version -> 
    babel-preset-react // JSX -> createElement invocation
    css-loader 
    style-loader
    html-webpack-plugin 
    webpack :  
    webpack-dev-server
    
React component

```javascript
React.createClass() // deprecated
```

````javascript
class App extends React.Component {
    render() {
        // user-interface
    }
}
````

Component concerned about
    
    state
    lifecycle event
    user-interface (required, render())
    
Separation of concerns !!!!

Mixing regular JavaScript with HTML is a huge violation of separation of concern. But if you really think about the concerns 
of this component is there a `state`, a `lifecycle event` and the `user interface` associated with it. 

```jsx harmony
class App extends React.Component { // JavaScript
    render() { // JavaScript
        return ( // JavaScript
            <div> Hello World! </div> // HTML
        )
    }
}
```

When the code gets compiled, for instance using `babel` it gets transpilled into a real JavaScript.

```javascript
_createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                ' Hello World! '
            );
        }
    }]);

    return App;
```

Webpack-dev-server dose not actually recompile, and push code to the `/dist` folder, it keeps it in cache, until  we run 
`webpack` that will push the change to the `dist` folder.