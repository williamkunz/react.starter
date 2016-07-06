'use strict';

const child_process = require('child_process');
const express = require('express');
const http = require('http');
const metadata = require('./package');
const path = require('path');


const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, 'dist', process.env.SERVE_DIR || 'local');

const app = express();

// Respond with a 200 OK when asked for a health check
app.get('/health_check', (req, res) => res.send(metadata.name));

// Respond with the Git hash when asked for the version
app.get('/version', (req, res) => {
    return child_process.exec('git rev-parse HEAD', {
        cwd: __dirname
    }, (err, stdout) => {
        if (!err && stdout) {
            const version = stdout.toString();

            if (version) {
                return res.status(200).send(version);
            }
        }

        console.error('Unable to get current version.', err);

        return res.status(500).send('Unknown version');
     });
});


app.use(express.static(PUBLIC_PATH));

// Fallback to sending index.html if an actual file doesn't exist at the given path
app.get('*', (req, res) => {
    res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'))
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(PORT, err => {
    if (err) {
        console.error(`Unable to start ${metadata.name} listening on port ${PORT}`, err);

        return process.exit(1);
    }

    console.log(`${metadata.name} listening on port ${server.address().port}`);
});
