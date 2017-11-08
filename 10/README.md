# Dynamic rendering + query params
A stateless functional component, that is going to receive props and return some user-interface. 
```javascript
function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
          Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
``` 

`onClick={props.onReset.bind(null, props.id)}>` we don't care about the specific context (i.e. `this`) because the context is already being set, 
but we do care about passing extra argument. 

## Route

```javascript
const Link = require('react-router-dom').Link;
```
If `playerOneImage` is a thing and `playerTwoImage` is a thing we want to render the `Battle` component. 
````javascript
render() {
        let match = this.props.match;
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;

        return (
            <div>
                {playerOneImage && playerTwoImage &&
                <Link
                    className='button'
                    to={{
                        pathname: match.url + '/results',
                        search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                    }}> Battle
                </Link>
                }
            </div>
        )
    }
````

When we click on the `Battle` button we will go to 

    `http://localhost:8080/battle/results?playerOneName=xgirma&playerTwoName=sisay`
    
A `/battele/result` and pass it a query string. So it would be nice if React `Router` pass this as a prop that tolled us that 
what the specific `url` you are at is, that way we can just append a new `Route` to it. 

What we could do is we could hard code `/battele/result` to our `<Link/>` component but what I would rather do, I would rather say 
take `the Route we are on` whatever that is, that can change later on, and append a `/result` to it. 

If we inspect and look the `props` passed by React `Router` that gives us is shown below. 

![match.url inside Battle component](/BattleTag.png "props =>  match -> url")

![match.url inside the Link component](/LinkTag.png "context => Router -> Route -> match -> url")

As you see above `match` has a `url` property on it, that is the property we use instead of hard coding `/battele`, if we
decide to change the route in our application from `battel` to `war` for example, and we hard code `battle` this will break. 


## Exact prop
```javascript
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/battle' component={Battle} />
        <Route path='/battle/results' componet={Results}/>
        <Route path='/popular' component={Popular} />
        <Route render={function () {
            return <p>Not Found</p>
        }} />
    </Switch>
```
The reason we add `exact` prop to `<Route exact path='/battle' component={Battle} />` is because we don't want our `Battle`
component rendered when we are at `/battle/results`. If we do not have `exact` both `/battel` and `/battel/results` will match,
and both of our `Battel` and `Results` component will render. By adding `exact` we say hey, unless we go to `/battle` exactly
we never want to render a `Battle` component. 

Same reason for `exact` at `<Route exact path='/' component={Home} />`. 

```javascript
const React = require('react');

class Results extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>Results!</div>
        )
    }
}
module.exports = Results;
```
![this.props](/Props.png)


