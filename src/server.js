
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, match, createMemoryHistory } from 'react-router';
import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    const history = createMemoryHistory(req.url);
    match({ history, routes }, (error, redirectLocation, renderProps) => {
        let body = ReactDOMServer.renderToString(<Router {...renderProps} />);
        const html =
            `<html>
                <head>
                    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                    <link rel="stylesheet" type="text/css" href="/style.css">
                </head>
                <body>
                    <div id="root">${body}</div>
                    <script async src="/bundle.js"></script>
                </body>
            </html>`;
        res.status(200).send(html);
    });
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
