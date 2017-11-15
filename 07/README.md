# Life Cycle Events + Ajax

    npm i --save axios // primised based HTTP client
    
> const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

Three things encompase a component

    state
    lifecycle events
    user interface
    
Lifecycle event

```javascript
    componentDidMount() {
     // here is where you want to make your AJAX requests   
    }
```
creating a new function and the `this` keyword

```javascript
updateLanguage(lang) {
        this.setState( function() { // this # 1
            return {
                selectedLanguage: lang
            }
        });

        api.fetchPopularRepos(lang)
            .then(function (repos) {
                console.log(repos);
                this.setState(function(){ // this # 2
                    return {
                        repos: repos
                    }
                })
            });
    }
```

Because we created a new function the `this` keyword in the promise is different from the `this` keyword above. Solution, 
add a `.bind(this)` property. Then the `this` keyword inside the promise will be the same as its outside `this` keyword.

````javascript
updateLanguage(lang) {
        this.setState( function() {
            return {
                selectedLanguage: lang
            }
        });

        api.fetchPopularRepos(lang)
            .then(function (repos) {
                console.log(repos);
                this.setState(function(){
                    return {
                        repos: repos
                    }
                })
            }.bind(this));
    }
````

We try to feach `repos` data when there is no `repos` data or even before we get a response from the github API, Solution

```javascript
render() {

        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                                onSelect={this.updateLanguage}
                />

                {!this.state.repos
                    ? <p>Loading ...</p>
                    : <RepoGrid repos={this.state.repos} />}
            </div>
        );
    }
``` 

Final