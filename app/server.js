// app/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const name = process.env.APP_NAME || 'Blue';

app.get('/', (req, res) => {
  res.send(`<html><body style="font-family:Arial,Helvetica,sans-serif">
    <h1>Hello from ${name}!</h1>
    <p>Instance: ${name}</p>
  </body></html>`);
});

app.listen(port, () => console.log(`${name} listening on ${port}`));
