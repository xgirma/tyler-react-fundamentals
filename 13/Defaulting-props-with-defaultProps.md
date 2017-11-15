# Defaulting props with defaultProps

A large benefit of React is creating and consuming highly reusable components. If you think about strategies for creating reusable components, a very important aspect is through props. You want a component to be able to work for more than just your very specific use case. For example, if we were creating a reusable <Loading /> component, we would want the user to be able to specify certain properties that are specific to their application. For example, you'd want the user to be able to specify their own styles or specify what the actual loading text will be. But what if some users don't want to specify their own specific style or loading text but instead want to use some default text? This is where `defaultProps` comes into play. `defaultProps` allows you to, as you guessed, specify what the default props will be in a component if those specific props aren't specified when the component is invoked.

```javascript
class Loading extends React.Component {
  render () {
    ...
  }
}
Loading.defaultProps = {
  text: 'loading',
  styles: {color: 'red'}
}
```

Now if someone uses our Loading component like this

```javascript
<Loading />
```
without specifying a text or styles property, `this.props.text` will default to 'loading' and `this.props.styles` will default to {color: 'red'}.

but if our component is used like this

```javascript
<Loading text='One second' styles={{color: 'green'}} />
```

Then `this.props.text` will be 'One second' and `this.props.color` will be 'green'.
