
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'build', 'public')));

app.get('*', (req, res) => {
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
                    <div id="root">Loading</div>
                </body>
            </html>`;
        res.status(200).send(html);
    });
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
