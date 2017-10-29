const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class User extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(function(user){
                    return <li>{user}</li>
                })}
            </ul>
        )
    }
}

ReactDOM.render(
    <User list={['Tyler', 'Moss', 'Toss', 'Foss']}/>,
    document.getElementById('app')
);
