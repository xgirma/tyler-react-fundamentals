# Data-flow with props
The same intuition you have about function holds true about components. 

```javascript
function sayName (name){
    alert(name);
}
```
Question: what is the value of name? 

Answer: I don't know. Until `sayName('girma')` is invoked with value.

Same for component, we don't know what is the `props` values are until that component is used and the `props` are passed.  

In JSX put your expression in curly-braces. 

```javascript
class Badge extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <img src= {this.props.img} />
                <h1> Name: {this.props.name} </h1>
                <h3> username: {this.props.username} </h3>
            </div>
        )
    }
}
```

# Map and Filter 
map 
```javascript
class User extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(function(user){
                    return <li>{user}</li>
                })}
            </ul>
        )
    }
}

ReactDOM.render(
    <User list={['Tyler', 'Moss', 'Toss', 'Foss']}/>,
    document.getElementById('app')
);
```

map and filter
```javascript
class User extends React.Component {
    render() {
        return (
            <div>
                <h2>Non-Friends</h2>
                <ul>
                    {this.props.list.filter(function (user) {
                            return user.friend !== true
                        }
                    ).map(function (f) {
                        return <li>{f.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <User list={[
        {name: 'Tyler', friend: true},
        {name: 'Moss', friend: false},
        {name: 'Toss', friend: true},
        {name: 'Foss', friend: false}]}/>,
    document.getElementById('app')
);

```
organised:
```javascript
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class User extends React.Component {
    render() {
        const nonFriends = this.props.list.filter(function(user){
            return user.friend === false
        });

        return (
            <div>
                <h2>Non-Friends</h2>
                <ul>
                    {nonFriends.map(function (f) {
                        return <li>{f.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <User list={[
        {name: 'Tyler', friend: true},
        {name: 'Moss', friend: false},
        {name: 'Toss', friend: true},
        {name: 'Foss', friend: false}]}/>,
    document.getElementById('app')
);
```

## Array or iterator should have a unique "key" prop.
*Warning:* Each child in an array or iterator should have a unique "key" prop.

Whenever you map on a list you need to give each item a `unique key`. Having a key helps React to track which item added and/or removed. 

```javascript
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class User extends React.Component {
    render() {
        const friends = this.props.list.filter(function (user) {
            return user.friend === true;
        });

        return (
            <div>
                <h2>Friends</h2>
                <ul>
                    {friends.map(function(user){
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <User list={[
        {name: 'Tyler', friend: true},
        {name: 'Moss', friend: false},
        {name: 'Toss', friend: true},
        {name: 'Foss', friend: false}]}/>,
    document.getElementById('app')
);
```
