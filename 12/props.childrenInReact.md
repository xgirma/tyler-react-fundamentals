# props.children in React
A very common practice when you're dealing with elements (whether React or HTML) is to need access to the specific data between the opening and closing elements. For example, let's look at a simple paragraph element

```html
<p>What even is a jQuery?</p>
```
If we were implementing the <p> tag ourself, we would need to somehow gain access to "What even is a jQuery?" or whatever is between the opening and closing paragraph tags. Let's look at a React component which is similar.

```html
<Clock>
  12:49 AM
</Clock>
```

Now with the implementation of our Clock component, we'll need somehow to access 12:49 AM or whatever is between the opening and closing element in order to update it. React gives us an easy way to do this and that is via this.props.children. In this case `this.props.children` will evaluate to 12:49 AM.

That's great, but what if our component is a little more complex?

```html
<Clock>
  <Time />
  <Period />
</Clock>
```
Now admittedly this is a bit of a weird implementation but it'll work. Now, as you might have guessed, `this.props.children` is an array of components rather than just a single component, since there are multiple components nested.

So again, `props.children` in a component is just whatever is between the <Opening> and closing </Opening> blocks of a component.
