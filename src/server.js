
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, match, createMemoryHistory } from 'react-router';
import express from 'express';
import path from 'path';
import fs from 'fs';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    const history = createMemoryHistory(req.url);
    match({ history, routes }, (error, redirectLocation, renderProps) => {
        let body = ReactDOMServer.renderToString(<Router {...renderProps} />);
        fs.readFile('./build/webpack-assets.json', 'utf8', (err, manifest) => {
            const { js, css } = JSON.parse(manifest).main;

            const html =
                `<html>
                    <head>
                        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                        <link rel="stylesheet" type="text/css" href="${css}">
                        <script async src="${js}"></script>
                    </head>
                    <body>
                        <div id="root">${body}</div>
                    </body>
                </html>`;
            res.status(200).send(html);
        });
    });
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
