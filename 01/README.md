# React Fundamental 

    Composition
    Unidirectional Dataflow
    Declarative
    Explicit Mutations
    Just JavaScript
    
Composition of component. React Components can be composed just like functions can be composed.

Function composition

```javascript
const getPicture = function (username){
    return 'Https://photo.fb.com/' + username;
}

const getLink = function(username) {
    return 'https://www.fb.com/' + username;
}

const getAvatarInfo = function (username) {
    return {
        pic: getPicture(username),
        link: getLink(username)
    }
}

getAvatarInfo('girma');
```

Component composition

```javascript
const Picture = function() {
    return (
        <img src={'https://photo.fb.com/' + this.props.username } />
    )
}

const Link = function() {
    return (
        <a href={'https://www.fb.com/' + this.props.username }>
            {this.props.username}
        </a>
    )
}

const Avatar = function() {
    return (
        <div>
            <Picture username={this.props.username} />
            <Link username={this.props.username} />
        </div>
    )
}

<Avatar username='girma' />

```

## Imperative vs Declarative

Imperative tell the computer HOW we want to do stuff. 

```javascript
const numbers = [4,2,4,2];
const total = 0;
for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
```

Declarative tell the computer WHAT we want to do stuff. Abstraction. 

```javascript
const numbers = [4,2,4,2];
numbers.reduce(function (previous, current){
    return previous + current;
})
```

Declarative 

    Reduce side effects
    Minimize mutablity 
    More readable code
    Less bugs
    
```javascript
$("#submit-btn").click(function(){
    $(this).toggleClass("highlight")
    $(this).text() === 'Add Highlight' ? $(this).text('Remove Highlight') : $(this).text('Add Highlight')
})
```
React is declarative *for the most part*.

```javascript
<SubmitBtn 
    onClick={this.handleTogglehighlight}
    highlight={this.state.highlight}
/>
```

Imperative React ...

```javascript
this.setState({
    highlight: !this.state.highlight
})
```
## Explicit Mutation

Static website vs complex website with a bunch of state in it. 

Example: your local dentist website vs Facebook website

Your local dentist website will never break because nothing is changing  inside it. 

The main purpose of React is managing your application state. Your user-interface is a function of your *state*. 

What happen is, your app collects a big ball-of-state as the user interacts with it *as the state update the user-interface will update as well*. 

Explicit mutation: whenever we need to update the `stata` in our application we have to call `setState()`. SetState is going to update state and also kick off a *re-render*. Re-render updates the user-interface. Note that, we are not setting listeners, we are EXPLICITLY calling `setState()` we know exactly what our user-interface is going to update, because that is what we are telling React to do whenever we call `setState()`.

```javascript
this.setState({
    highlight: !this.state.highlight
})
```
## Just JavaScript

```javascript
<ul> 
    {friends.map(function(name){
        return (
            <li>
                {name}
            </li>
        )
    })}
</ul>
```

# Piecing the Puzzle

    React
    React Router
    Webpack
    Babel
    Axios

React Router map a component to a specific url. Route is component and link is also a component.

Webpack will take our entry component and bundle our code.

Babel a code transformer. JSX -> regular JavaScript.

Axios for making AJAX request. 

