# Pure Function

## PropTypes

The previous example have three props, `name`, `username` and `img`, all of them are `String` type, what if,
if another developer instead of passing `img` as a String she pass `img` as an object that has an `image` property?

```javascript
const React = require('react');
const ReactDOM = require('react-dom');

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <h1>Name: {this.props.name} </h1>
                <h2>username: {this.props.username} </h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge
        img={{image: "https://avatars3.githubusercontent.com/u/5876481?"}}
        name="Girma Nigusse"
        username="xgirma"
    />,
    document.getElementById('app'));
```

The following error will be thrown: 

> Warning: Failed prop type: Invalid prop `img` of type `object` supplied to `Badge`, expected `string`. in Badge

PropTypes allows you to specify props type. When a wrong type gets passed you get a warning in the console. 

    npm install --save prop-types
    
Older version of React ( before 15.5)

```javascript
React.PropTypes 
```
As of React 15.5 PropTypes is its own library.n

```javascript
const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <h1>Name: {this.props.name} </h1>
                <h2>username: {this.props.username} </h2>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

ReactDOM.render(
    <Badge
        img="https://avatars3.githubusercontent.com/u/5876481?"
        name="Girma Nigusse"
        username="xgirma"
    />,
    document.getElementById('app'));
```
more example: 

```javascript
const React = require('react');
const ReactDOM = require('react-dom');
const PropType = require('prop-types');
require('./index.css');

class User extends React.Component {
    render() {
        const friends = this.props.list.filter(function (user) {
            return user.friend === true;
        });

        const nonFriends = this.props.list.filter(function (user) {
            return user.friend !== true;
        });

        return (
            <div>
                <h2>Friends</h2>
                <ul>
                    {friends.map(function(user){
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>

                <h2>Non-Friends</h2>
                <ul>
                    {nonFriends.map(function(user){
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>
            </div>
        )
    }
}

User.PropTypes = {
    list: PropType.array.isRequired
};

ReactDOM.render(
    <User list={[
        {name: 'Tyler', friend: true},
        {name: 'Moss', friend: false},
        {name: 'Toss', friend: true},
        {name: 'Foss', friend: false}]}/>,
    document.getElementById('app')
);
```

Now imagine you don't build the component, some other developer builds the component and you want to know what prop-type
to pass in. Use `PropTypes`.