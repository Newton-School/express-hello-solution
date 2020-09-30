const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.status(200).send("Hello, World!");
});

app.get('/url-example', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'response from route'
    });
})

module.exports = app;