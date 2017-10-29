const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class Avater extends React.Component {
    render() {
        return <img src={this.props.img} />
    }
}

class Label extends React.Component {
    render () {
        return <h1>Name: {this.props.name} </h1>
    }
}

class ScreenName extends React.Component {
    render () {
        return <h3>username: {this.props.username}</h3>
    }
}

class Badge extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Avater img={this.props.img}/>
                <Label name={this.props.name}/>
                <ScreenName username={this.props.username}/>
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