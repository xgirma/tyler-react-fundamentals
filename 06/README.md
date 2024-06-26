# Stateless functional components

In the previous example the whole job of the `render` function in the `Popular component is render this list.

```javascript
const React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState( function() {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <div>
                <ul className='languages'>
                {languages.map((lang) => {
                    return (
                        <li
                            style={lang === this.state.selectedLanguage? { color: '#d0021b'}: null}
                            key={lang}
                            onClick={this.updateLanguage.bind(null, lang)}>
                            {lang}
                        </li>
                    )
                })}
                </ul>
            </div>
        );
    }
}

module.exports = Popular;
```

What if we want `Popular` to include both the list and the grid of the most popular repository?

Glancings at the render method usually tells what a specific component does. 

    1. move the list into its own componenet, to make the `Popular` component as declarative as possible.
    
```javascript
const React = require('react');
const PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
    render () {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <div>
                <ul className='languages'>
                    {languages.map((lang) => {
                        return (
                            <li
                                style={lang === this.props.selectedLanguage? { color: '#d0021b'}: null}
                                key={lang}
                                onClick={this.props.onSelect.bind(null, lang)}>
                                {lang}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState( function() {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {

        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                                onSelect={this.updateLanguage}
                />
            </div>
        );
    }
}

module.exports = Popular;
```

When you build a React app, if you have component like `SelectLanguage` what they do is 
    
        1. take some props
        2. render some user-interface
        
There is no a whole lot of complexity, because there is no state, nothing gets changed. Because this is a common 
pattern in React. React make it easy. Instead of creating a whole `class` you can go ahead am make a `function`. Note
if all your function has is a `render` method, you can just create a functional component. 

        how do we get props? because we don't have access to the this keyword anymore. 
        
Solution, React will pass us `props` as a first argument. Whenever you have this kinds of function in React it is called
a `stateless functional component`. Because, obviously it dose not have any state. Because we are just receiving everything as 
`props` and we don't have the `this` keyword to put the state on. 

    Stateles functional component is a function that just return or render some user-interface. 
    
```javascript
const React = require('react');
const PropTypes = require('prop-types');

function SelectLanguage (props) {
    // console.log(this); // undefined
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <div>
            <ul className='languages'>
                {languages.map((lang) => {
                    return (
                        <li
                            style={lang === props.selectedLanguage? { color: '#d0021b'}: null}
                            key={lang}
                            onClick={props.onSelect.bind(null, lang)}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState( function() {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {

        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                                onSelect={this.updateLanguage}
                />
            </div>
        );
    }
}

module.exports = Popular;
```