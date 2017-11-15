# Building a Highly Reusable React Component
We are going to make this component as reusable as possible, meaning we are going to push this to npm and other developers are
going to install and use it in their application. So it should be highly independent. 

```javascript
const React = require('react');
const PropTypes = require('prop-types');

class Loading extends React.Component {
    render () {
        return (
            <p>
                {this.state.text}
            </p>

        )
    }
}

module.exports = Loading;
```
All we need to do now is go ahead and manage what `this.state.text` is. And React will take care of updating the view 
for us. Also pay attention to the `in-line style`. 

```javascript
const React = require('react');
const PropTypes = require('prop-types');

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Loading'
        }
    }

    render () {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>

        )
    }
}

module.exports = Loading;
```

What if the person who use our component did want the word `Loading`? They might want the word `Waiting`, or `Downloading`...
What we can say here is we want the text be whatever the `props.text` is, that way whoever using our text is go ahead and 
specify as a `prop` but if they don't we want to default to `Loading`, using `defaultProps`.  

> Loading.defaultProps = { text: 'Loading' }

```javascript
const React = require('react');
const PropTypes = require('prop-types');

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    render () {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>

        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired
};

Loading.defaultProps = {
    text: "Loading"
};

module.exports = Loading;
```

Finally, giving the loading text a bit of animation. 

> componentDidMount

> this.setState(function(previousState) {})

> componentWillUnmount() { window.clearInterval(this.interval); }

```javascript
const React = require('react');
const PropTypes = require('prop-types');

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        let stopper = this.props.text + '...';
        this.interval = window.setInterval(function() {
            if(this.state.text === stopper){
                this.setState(function () {
                    return {
                        text: this.props.text
                    }
                })
            } else {
                this.setState(function(previousState) {
                    return {
                        text: previousState.text + '.'
                    }
                })
            }
        }.bind(this), this.props.speed) // pay attention here
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render () {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>

        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
    text: "Loading",
    speed: 300
};

module.exports = Loading;
```
Whenever you want to set a new state based on the previous state, the `first argument` that is going to be passed to the
second function is going to be the `prevState`. 

Without `componentWillUnmount() { window.clearInterval(this.interval); }` we will get the below error. Because what is happening is
when our component mounts we set this interval, let say every 300 milli seconds, this function is going to run, until the
user closes our app. This is not good, so what we need to do is, when this component un-mount, we need to remove `this.interval`
listener. 

The reason we did `this.interval` inside `componentWillUnmount()` we want to pass `window.clearInterval(this.interval);`. So 
when our component is removed from the view, we call `window.clearInterval` with the name of listener we want to remove. 

<img width="903" alt="screen shot 2017-11-12 at 4 54 27 pm" src="https://user-images.githubusercontent.com/5876481/32705540-6229fdb4-c7ca-11e7-8310-42db4b5c176c.png">

Inside `Popular` component

```javascript
const React = require('react');
const PropTypes = require('prop-types');
const api = require('./../utils/api');
const Loading = require('./Loading');


RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
};

// ...

class Popular extends React.Component {
    // ...
    render() {

        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                                onSelect={this.updateLanguage}
                />

                {!this.state.repos
                    ? <Loading text='Downloading' />
                    : <RepoGrid repos={this.state.repos} />}
            </div>
        );
    }
}

module.exports = Popular;
```

Inside `Results` component

```javascript
const React = require('react');
const PropTypes = require('prop-types');
const queryString = require('query-string');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;
const PlayerPreview = require('./PlayerPreview');
const Loading = require('./Loading');

// ...

class Results extends React.Component {
    // ...
    
    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        if(loading === true) {
            return <Loading text={'Battling'} speed={320}/>
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
            <div className='row'>
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />

                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />

            </div>
        )
    }
}

module.exports = Results;
```