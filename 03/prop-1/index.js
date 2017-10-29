const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

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

ReactDOM.render(
    <Badge
        name="Girma Nigusse"
        username="xgirma"
        img="https://avatars3.githubusercontent.com/u/5876481?"
    />,
    document.getElementById('app')
);