const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const path = require('path');
const Express = require('express');
const app = new Express();
const port = 8080;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dev', 'index.html')));

const server = app.listen(port, error => {
    if (error) {
        console.error('Unable to start server.', error);
    } else {
        console.info(`🎉 🍻  Head to http://localhost:${server.address().port}/ in your browser 🍻🎉`);
    }
});
