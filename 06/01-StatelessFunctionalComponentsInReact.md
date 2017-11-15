# Stateless Functional Components in React
We were first introduced to Stateless Functional Components during the "Building UIs with Pure Functions and Function Composition" section. If you're using React correctly, you're going to notice you have a lot of components that simply take in some data via props and output some UI - that is, components with just a render method. The reason for this is because a really great paradigm to get used to is separating your components into container components and presentational components, with presentational components optionally taking in some data and rendering a view. Because this is such a common pattern in React, as of React 0.14 you can now have components that are just normal functions if those components only have a render method and optional props.

Let's take a look at an example.

```javascript
class HelloWorld extends React.Component {
  render () {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}
ReactDOM.render(<HelloWorld name='Tyler' />, document.getElementById('app'))
```

Here's an example you've seen before and you should be very comfortable with at this point. We've created a new React component that returns us a div that says "Hello " + whatever name you passed in when you invoked the component.

You'll notice that this component just has a render method, that means we can remove the React.Component abstraction and just use a plain function. Refactored to use a stateless functional component, the example above would look like this

```javascript
function HelloWorld (props) {
  return (
    <div>Hello {props.name}</div>
  )
}
ReactDOM.render(<HelloWorld name='Tyler' />, document.getElementById('app'))
```

Notice React passes props to your function as the first argument to the function. This is a lot cleaner and makes creating React components more natural since you're literally just making a function. It's a good idea to try to use as many Stateless Functional Components as possible because then you have a good separation of presentational components vs other components.

Now you'll notice I'm being very explicit with saying "Stateless Functional Components" rather than just "Functional Components". That's because future Functional Components may be able to contain state, [here's](https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components) a blog post I wrote that goes into more detail if you're interested in the naming convention.

