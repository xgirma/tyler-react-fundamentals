# React Router V4

    npm i --save react-router-dom
    
```javascript
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.route;
```
    
```javascript
const React = require('react');
const ReactRouter = require('react-router-dom');
const Popular = require('./Popular');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.route;

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

module.exports = App;
```

First thing, instead of rendering `<div>` we will render a `<Router>`. 

```javascript
const React = require('react');
const ReactRouter = require('react-router-dom');
const Popular = require('./Popular');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.route;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path='/popular' component={Popular} />
                </div>
            </Router>
        )
    }
}

module.exports = App;
```

Navigation: Link vs NavLink

```javascript
const Link = require('react-router-dom').Link;
const NavLink = require('react-router-dom').NavLink;
```

Both `Link` and `NavLink` render an `a` tag. Use `Link` if all you want is to display a link and `NavLink` to dynamically change the style of a link, based on if that route is active (e.g. making active link bold).

```javascript
const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'> Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'> Battle</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'> Popular</NavLink>
            </li>
        </ul>

    )
}

module.exports = Nav;
```

A link transition when a button is clicked. 

```javascript
const React = require('react');
const Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        <div className='home-container'>
            <h1>Github Battle: Battle your friends... and stuff.</h1>
            <Link className='button' to='/battle'>Battle</Link>
        </div>
    }
}

module.exports = Home;
```

If we refresh a page we get `Cannot GET /popular`. What is happening here is the browser is making a request to your server
in order to get the assets at `/popular` (http://localhost:8080/popular). Basically there are none. 

At this point we have ReactRouter handling all of our routing for us. So what we can do is make some change in our 
`webpack.config.js` file under `output` section set a `publicPath` property. This lets us to set the base of our assets.

And what really fixes the issue is adding a new property `devServer: { historyApiFallback: true }` What this does is whenever
our app now sees a URl like `http://localhost:8080/popular` instead of requesting the asset from the server `/popular` it will 
redirect to `/` and React router will see that and the react Router will load the route for `/popular`. 


```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: "/" // +1
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: { // +2
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
```

http://localhost:8080/garbasfsfge

We want to show `404 not found`.  

```javascript
const Switch = ReactRouter.Switch;
```

We can use `Switch`. Inside our `render` method we are going to render the `Switch`. What `Switch` is going to do is when
this runs instead of rendering all of the routes that are active, `Switch` will render ONE specific route. We can assume, 
if any of the three routes dose not render we are at invalid route. 

So we can render another route, `this route is not going to have a path` because we always wanted it to be active and tobe
shown. But because it is wrapped in `Switch` it will only be shown if non of the other routes are active. For the specific 
user-interface to be shown we can pass in a component prop or ReactRouter also allows you to give a `render={}` prop and 
`render` can take a `function` which returns some user-interface. 

```javascript
const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Popular = require('./Popular');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
module.exports = App;
```