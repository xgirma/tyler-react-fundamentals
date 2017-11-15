# Building for Production + Hosting

Resources

> [reactjsnewsletter](http://reactjsnewsletter.com/)
> [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
> [React "Aha" Moments](https://tylermcginnis.com/react-aha-moments/)
> [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
> [Functional Programming is taking over UIs with Pure Views.](https://medium.freecodecamp.org/the-revolution-of-pure-views-aed339db7da4)

For production ready

        NODE_ENV to production
        yglify, minify 
        
`const webpack = require('webpack');` will enable us to do both ot the above requirements. 

```javascript
if("we are building for production") {
    config.plugin.push()
}
```

`config.plugin.push()` is just JavaScript. Set `process.env` to `production`.

```javascript
if ("we are building for production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }
        })
    )
}
```

What this is going to do is the way you tell React, you want to use the `production version of React`, you
set `NODE_ENV` on `process.env` object to be production. So that way what React is going to do, is going to
do a bunch of optimisation, specifically it is about `warnings` and `loagging` and built specifically for
production. 

Minify our code

```javascript
if ("we are building for production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin() // minify our code
    )
}
``` 

Build for production `package.json`

```json
{
  "name": "tyler-react-fundamentals",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "create": "webpack",
    "start": "webpack-dev-server --open",
    "build": "NODE_ENV='production' webpack -p"
  }
```

When we run `npm run build`, `process.env.NODE_ENV` will become `production`.

```javascript
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin() // minify our code
    )
}
``` 

Why we are setting the `NODE_ENV` twice. One in the `package.json` and another in the `webpack.config.js`?

> 'NODE_ENV': JSON.stringify('production') => webpack.config.js
> "build": "NODE_ENV='production' webpack -p" => package.json

The reason is the one in `"build": "NODE_ENV='production' webpack -p"` will set node environment into production inside of our `webpack.config.js` file, but not inside of our compiled code, webpack is going to compile. And `'NODE_ENV': JSON.stringify('production')` will set the Node environment inside our compiled code. 

Finally 

```javascript
if (process.env.NODE_ENV === 'production') { // 1
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 2
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin() // minify our code
    )
}
```
## Deploy

        npm install firebase-tools --save-dev

```json
{
  "name": "tyler-react-fundamentals",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "create": "webpack",
    "start": "webpack-dev-server --open",
    "build": "NODE_ENV='production' webpack -p",
    "firebase-init": "firebase login && firebase init",
    "deploy": "npm run build && firebase deploy"
  }
}
```
        npm run firebase-init
        npm deploy

Victory !!!
