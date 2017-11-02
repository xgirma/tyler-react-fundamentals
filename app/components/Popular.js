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