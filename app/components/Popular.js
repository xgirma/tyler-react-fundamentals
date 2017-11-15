const React = require('react');

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        console.log('You clicked: ', lang);
        this.setState( function() {
            return {
                selectedLanguage: lang
            }
        })
    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <div className='container'>
                <p>Selected: {this.state.selectedLanguage} </p>
                <ul className='languages'>
                    {languages.map((lang) => {
                        return (
                            <li style={lang === this.state.selectedLanguage? { color: '#d0021b'}: null}
                                onClick={this.updateLanguage.bind(null, lang)}
                                key={lang}>
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