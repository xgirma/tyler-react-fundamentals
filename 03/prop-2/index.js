const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

const USER_DATA = {
    name: "Girma Nigusse",
    username: "xgirma",
    img: "https://avatars3.githubusercontent.com/u/5876481?"
};

class Badge extends React.Component {
    render() {
        console.log(this.props.user);
        return (
            <div>
                <img src= {this.props.user.img} />
                <h1> Name: {this.props.user.name} </h1>
                <h3> username: {this.props.user.username} </h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge user={USER_DATA}/>,
    document.getElementById('app')
);