# Composition via props.children

<img width="420" alt="screen shot 2017-11-09 at 11 45 27 pm" src="https://user-images.githubusercontent.com/5876481/32647851-30034a9e-c5a8-11e7-9dd1-7d4e75e5563d.png">

See the `search` property in the `location` property, which contains our `playerOneName` and `playerTwoName`, so what 
we need to do is go ahead and parse it `"?playerOneName=xgirma&playerTwoName=girma"`.

    npm i --save query-string
    
````javascript
const React = require('react');
const queryString = require('query-string');

class Results extends React.Component {

    render() {
        let players = queryString.parse(this.props.location.search);
        console.log(players);
        return (
            <div>Results!</div>
        )
    }
}
````

<img width="756" alt="screen shot 2017-11-09 at 11 54 29 pm" src="https://user-images.githubusercontent.com/5876481/32648143-6492b15e-c5a9-11e7-9f3a-c5998cbe0ef9.png">

When the `result` component mounts, we want to grab `queryString` and pass them to our API.

```javascript
const React = require('react');
const queryString = require('query-string');

class Results extends React.Component {

    componentDidMount () {
        let players = queryString.parse(this.props.location.search);
    }

    render() {
        console.log(players);
        return (
            <div>Results!</div>
        )
    }
}
```

with out `.bind(this)`

```javascript
const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Results extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount () {
        let players = queryString.parse(this.props.location.search);

        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(function (results){
            if (results === null) {
                return this.setState(function () {
                    return {
                        error: 'Looks like there was error. Check that both users exist on Github',
                        loading: false
                    }
                });
            }

            this.setState(function () {
                return {
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }
            });
        });

    }

    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        if(loading === true) {
            return <p>Loading ...</p>
        }

        return (
            <div>Results!</div>
        )
    }
}

module.exports = Results;
```

<img width="737" alt="screen shot 2017-11-10 at 12 35 30 am" src="https://user-images.githubusercontent.com/5876481/32649499-1a5afafa-c5af-11e7-8240-3ecf915aa868.png">

with `.bind(this)` no error. 

```javascript
const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Results extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount () {
        let players = queryString.parse(this.props.location.search);

        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(function (results){
            if (results === null) {
                return this.setState(function () {
                    return {
                        error: 'Looks like there was error. Check that both users exist on Github',
                        loading: false
                    }
                });
            }

            this.setState(function () {
                return {
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }
            });
        }.bind(this)); // the `this` keyword here is the same as the `this` keywords inside `componentDidMount`

    }

    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        if(loading === true) {
            return <p>Loading ...</p>
        }

        return (
            <div>Results!</div>
        )
    }
}

module.exports = Results;
```

Debug, the raw response with `JSON.stringify`

```javascript
const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;

class Results extends React.Component {
    // ...
    
    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        if(loading === true) {
            return <p>Loading ...</p>
        }

        if(error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }

        return (
            <div>{JSON.stringify(this.state, null, 2)}</div>
        )
    }
}

module.exports = Results;
```

## props.children 
When we see the final result, there is similar components in `/battel` in `Battle` component and `battel/results` in 
`Results` component as shown below. So, we can move `PlayerPreview` out of the `Battle` component and share it 
between the two components.  

`Battle` component

<img width="1202" alt="screen shot 2017-11-10 at 2 11 13 am" src="https://user-images.githubusercontent.com/5876481/32653377-8def8910-c5bc-11e7-97a2-1c3b2e6b1383.png">

`Results` component

<img width="1197" alt="screen shot 2017-11-10 at 2 24 41 am" src="https://user-images.githubusercontent.com/5876481/32653950-65844450-c5be-11e7-9f58-dcec0419b5f8.png">


In the `PlayerPreview` we need `const React = require('react');` even if we do not use React, requiring React is 
necessary because we are using JSX.

```javascript
const React = require('react');
const PropTypes = require('prop-types');

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}/>
                <h2 className='username'>@{props.username}</h2>
            </div>
            <button
                className='reset'
                onClick={props.onReset.bind(null, props.id)}
            >Reset</button>

        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
};

module.exports = PlayerPreview;
```

Now notice, on the `Results` component we don't have a button. In the `Results` page instead of a Button we want to show
some information. But in the `Battel` component we want to show the `Reset` Button. The way we are going to solve this is
by using `props.children`. 

For example we want to return `Abc` with something inside of it

```javascript
function Abc () {
    return (
        <div>
            // something inside
        </div>
    )
}
```

When I read `Abc` I can created like `<Abc />` but if instead I created my read component like `<Abc> </Abc>` now
whatever I pass in inside the opening and closing of the component `<Abc> // something </Abc>` 
is going to be `referenced` inside of our component definition as `{props.children}`. 

````javascript
function Abc (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

<Abc>
    <Something />
</Abc>
````

So instead of rendering the `Reset` button remove it and replace it with `{props.children}`. 

```javascript
const React = require('react');
const PropTypes = require('prop-types');

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}/>
                <h2 className='username'>@{props.username}</h2>
            </div>
            {props.children} // render whatever is inside props.children
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
};

module.exports = PlayerPreview;
```

Now when we use `PlayerPreview` inside of our `Battle` component instead of having a self-closing tag, we can stick 
something between the opening and the closing of the component. 

