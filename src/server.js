
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'build', 'public')));

app.get('*', (req, res) => {
    const html =
        `<html>
            <head>
                <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                <link rel="stylesheet" type="text/css" href="style.css">
                <script async src="bundle.js"></script>
            </head>
            <body>
                <div id="root">Loading</div>
            </body>
        </html>`;
    res.status(200).send(html);
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
