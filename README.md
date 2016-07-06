# Installation
```
npm install
```
### Install webpack globally if you haven't already
```
npm i -g webpack
```

# Usage

This boilerplate includes [Redux](http://redux.js.org/) & [React Router](https://github.com/reactjs/react-router).

### Run dev server
```
npm run dev
```

View at `http://localhost:8080`

### Dev Tools
I highly recommend installing [Redux DevTools](https://github.com/gaearon/redux-devtools) for debugging and time travel.


### Fetch API
Polyfilled to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

[Browser support](https://github.com/github/fetch#browser-support)

# Production settings
In files:

```
webpack.production.config.js

```

Set your build level global `__API__` at line 37.

`__API__: JSON.stringify('YOUR PRODUCTION API URL')`

```
SERVER_DIR=prod PORT=3000 webpack -p --config webpack.production.config.js
npm start
```
