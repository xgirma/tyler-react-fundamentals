# Private Components in React
By now you've heard over and over about the benefits of stateless functional components and functions that just return some UI. We can take our enamoration even one step further.

Let's say we have the code below.

```javascript
var React = require('react');
function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => {
        return (
          <li key={friend}>{friend}</li>
        )
      })}
    </ul>
  )
}
module.exports = FriendsList
```

So we have a FriendList component which is just returning us a header and an unordered list of friends.

This looks great, but remember, React is all about modularity. As your render method grows, it's a good habit to take pieces and abstract them to new components. Why not create another stateless functional component that's in charge of handling each friend?

```javascript
var React = require('react');
function FriendItem (props) {
  return <li>{props.friend}</li>
}
function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => <FriendItem friend={friend} key={friend} />)}
    </ul>
  )
}
module.exports = FriendsList
```

Notice that all we've done is essentially create a "private component" just as we would a private function.

One thing I really like about stateless functional components that I haven't mentioned up until this point is that they have no "this" keyword associated with them. If you're familiar with the "this" keyword you know that it allows you to call a function in a different context. What that means is that if you're using the "this" keyword, you're not 100% sure what the implementation of said function will look like. By removing the option to have a "this" keyword, we've removed the one way in which our function can be called in a way we're not expecting.
