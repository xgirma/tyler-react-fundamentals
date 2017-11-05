# Forms and Encapsulation in React

    React Developer Tools
    https://github.com/facebook/react-devtools
    
## Controlled vs uncontrolled components
If you think of forms when you build a web-app, typically what you do the user will type something into the input field
and when they submit it you go ahead and grab that item from the DOM and you have the specific value. 

React is all about managing state. That brings the idea of `controlled` vs. `uncontrolled` components. A controlled 
component is that is what we will be using in this chapter `battle`. 

Controlled component is instead of grabbing the value from the DOM, what you do instead is you `bind the value of the input 
field to whatever a property on the state object`.

That sounds backward. Because what would you expect is you to expect to type in to the input field and update the `state`. 
But what really happens is `you bind the input field to whatever the state value is, that way whenever you update the state 
the input field is going to change`. In React terms this is called a controlled component. Because React is controlling the value 
of this specific input field. 

Uncontrolled component instead of binding the input component to the state, whenever the user click submit you basically 
you just go, just like you would typically you grab the value from the DOM. 

There is pros and cons in both approaches. React documentation recommends the controlled way when you deal with forms.
Whenever the input field changes, that updates our state. Then goes and update the value of the input field. 

## Encapsulation 
Is the way you update parent component state from a child component is you passed that child component a function, that 
function will receive a specific state and when it is invoked with that specific piece of child state it will go ahead 
and update the parent state. 

### Parent component
```javascript
const React = require('react');

class Battle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            image: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(username) {
        this.setState(function(){
            let newState = {};
            newState[name] = username;
            newState[image] = 'http://github.com/' + username + '.png?size=200';
            return newState; // merge the new state
        });
    }

    render() {
        let name = this.state.name;

        return (
            <div>
                <div className='row'>
                    {!name && // if `name` is empty or falsely show player input component
                    <PlayerInput
                        label='Player One'
                        onSubmit={this.handleSubmit} // on submit callback
                    />}
                </div>
            </div>
        )
    }
}

module.exports = Battle;
```

`onSubmit={this.handleSubmit}`  we want to get the end result whatever the user types in the input-field, and we do not 
want to manage that state inside our `Battel` component, so we create a new component that will manage the state 
complexity for us. And whenever the use is finished, go ahead and call `handleSubmit` passing it specific `name` which 
is whatever the user submitted. 


A ternary in JSX: that will say if `playerOneName` is not a thing, is falsely, then go ahead and render `PlayerInput`
component.  

```javascript
    <div className='row'>
        {!name && <PlayerInput />}
    </div>
```
`&&` is a short hand if statement. What it saying if `!name` is truthy, then do `PlayerInput`.

Create a new file whenever you have a reusable component. Else create a child component in the same file as the parent.

### Child component
```javascript
class PlayerInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){ // keep username value up-to-date
        let value = event.target.value;

        this.setState(function () {
            return {
                username: value // 02 update state with user input
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(
            this.state.username // 05 pass username to parent component
        )
    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>  
                <label className='header' htmlFor='username'>{this.props.label}</label>
                <input
                    id='username'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.username} // 03 binding the value of input field with our state
                    onChange={this.handleChange} // 01 pass user input
                />
                <button
                    className='button'
                    type='submit'  // 04 on submit
                    disabled={!this.state.username} 
                >Submit</button> 
            </form>
        )
    }
}

PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
```
The required state for the `PlayerInput` component is only a `username` the input field is going to be bound to. 



### Form

```javascript
render() {
        return (
            <form className='column'>
                <label className='header' htmlFor='username'>{this.props.label}</label>
            </form>
        )
    }
```
A `label` tag inside a `form` element typically with `labels` they have a `for` property which allows you to tie a `label`
to a specific `input` field. But `for` just like `class` is a reserved word of JavaScript, so to get around that you can do
`htmlFor` which is a react thing. 

```javascript
render() {
        return (
            <form className='column'>
                <label className='header' htmlFor='username'>{this.props.label}</label>
                <input
                    id='username'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.username} // 02
                    onChange={this.handleChange} // 01
                />
            </form>
        )
    }
```
The `input` field has an id `username` to tie it to the `label`. 
Now we want to bind the value of our state to the `input` field. What we are going to do is the `value` of this `input`
field is whatever `this.state.username`. And now all we have to worry about is keeping the `username` up-to-date. We can do that
by this `onChange` property, which we will pass a function to call `handleChange`. 

> Now,  whenever a change occurs in the `input` field `handleChange` (`onChange={this.handleChange}`) will run, that is going to update our `state` and 
then go update the `input` field (`value={this.state.username}`). 

```javascript
render() {
        return (
            <form className='column'>
                <label className='header' htmlFor='username'>{this.props.label}</label>
                <input
                    id='username'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.username} // binding the value of input field with our state
                    onChange={this.handleChange}
                />
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.username}
                >Submit</button>
            </form>
        )
    }
```

`disabled={!this.state.username}` we want the button disabled if `this.state.username` is not a thing. This is a default
value of the `input` field. Now we need to add `onSubmit` property to our `form` (`onSubmit={this.handleSubmit}`) that way
whenever this button is clicked, because it has a type of `submit`, it will run whatever function we pass to this 
`onSubmit` property. We will create a `handleSubmit` function, it will receive `event`, we will do `event.preventDefault();`
because we do want this `form` to submit anything to server. The parent component `Battle` pass, the `onSubmit` function, 
which is really just referencing ***handleSubmit*** in the parent component, it is taking a `username`, so what we will do
inside of `handleSubmit` inside the child-component, we will call `this.props.onSubmit` to pass the `username`. 
