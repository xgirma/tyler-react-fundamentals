const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

require('./index.css');

class User extends React.Component {
    render() {
        const friends = this.props.list.filter(function (user) {
            return user.friend === true;
        });

        const nonFriends = this.props.list.filter(function (user) {
            return user.friend !== true;
        });

        return (
            <div>
                <h2>Friends</h2>
                <ul>
                    {friends.map(function (user) {
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>

                <h2>Non-Friends</h2>
                <ul>
                    {nonFriends.map(function (user) {
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>
            </div>
        )
    }
}

User.PropTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    })),
};

ReactDOM.render(
    <User list={[
        {name: 'Tyler', friend: true},
        {name: 'Moss', friend: false},
        {name: 'Toss', friend: true},
        {name: 'Foss', friend: false}]}/>,
    document.getElementById('app')
);