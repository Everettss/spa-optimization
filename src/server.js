
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, match, createMemoryHistory } from 'react-router';
import express from 'express';
import path from 'path';
import routes from './routes';
import WithStylesContext from './WithStylesContext';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    const history = createMemoryHistory(req.url);
    match({ history, routes }, (error, redirectLocation, renderProps) => {
        const css = [];
        let body = ReactDOMServer.renderToString(
            <WithStylesContext
                onInsertCss={(...styles) => {
                    styles.forEach(style => css.push(style._getCss())); // eslint-disable-line no-underscore-dangle
                }}
            >
                <Router {...renderProps} />
            </WithStylesContext>
        );
        const html =
            `<html>
                <head>
                    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                    <script async src="bundle.js"></script>
                    <style id="css">${css.join('')}</style>
                </head>
                <body>
                    <div id="root">${body}</div>
                </body>
            </html>`;
        res.status(200).send(html);
    });
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
