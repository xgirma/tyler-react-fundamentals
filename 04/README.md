# Pure Function

## PropTypes

The previous example have three props, `name`, `username` and `img`, all of them are `String` type, what if,
if another developer instead of passing `img` as a String she pass `img` as an object that has an `image` property ?

PropTypes allows you to specify props type. When a wrong type gets passed you get a warning in the console. 

    npm install --save prop-types
    
Older version of React ( before 15.5)

```javascript
React.PropTypes 
```
As of React 15.5 PropTypes is its own library.n