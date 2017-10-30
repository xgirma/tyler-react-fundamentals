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

In React put your expression in curly-braces. 

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