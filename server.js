const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.static('public'))

app.get('/events', (req, res) => {
    res.send('home')
})

app.listen(port || 3000, () => {
    console.log(`Server running on http://${host}:${port}`)
})