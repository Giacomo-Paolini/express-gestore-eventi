const express = require('express');
const dotenv = require('dotenv');
const eventsRouter = require('./routers/eventsRouters')
const bodyParser = require('body-parser');
const errorsFormatter = require('./middlewares/errorsFormatter');
const routerNotFound = require('./middlewares/routeNotFound');

const app = express();
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.static('public'))
app.use(bodyParser.json());

app.use('/events', eventsRouter)

app.use(errorsFormatter);
app.use(routerNotFound);

app.listen(port || 3000, () => {
    console.log(`Server running on http://${host}:${port}`)
})