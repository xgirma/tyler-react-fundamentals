const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <h1>Name: {this.props.name} </h1>
                <h2>username: {this.props.username} </h2>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

ReactDOM.render(
    <Badge
        img={{image: "https://avatars3.githubusercontent.com/u/5876481?"}}
        name="Girma Nigusse"
        username="xgirma"
    />,
    document.getElementById('app'));