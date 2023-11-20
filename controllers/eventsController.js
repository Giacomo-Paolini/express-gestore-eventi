const events = require('../db/events.json')
const Event = require('../models/eventModel')
const db = require('../db/events.json')
const { get } = require('../routers/eventsRouters')

function index (req, res) {
    res.format ({
        html: () => {
            res.type('html')
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`];
            html.push('<div class="container"><h1>Lista degli eventi</h1>');

            db.forEach(event => {
                html.push(`<div class="card" style="width: 18rem;">${event.title}</div>`);
                html.push(`<div class="card-body">${event.description}</div>`);
                html.push(`<div class="card-body">${event.date}</div>`);
                html.push(`<div class="card-body">${event.maxSeats}</div>`);
            })

            html.push('</div>');

            res.send(html.join(""));
        }
    }) 
};

function store (req, res) {
    const newData = req.body;
    console.log(newData);
    Event.writingDb(newData);
    res.status(201).send(newData);
};

function update (req, res) {
    const eventId = req.params.id;
    const data = Event.getEvents(eventId);
    res.send(data);
};

module.exports = {
    index,
    store,
    update
}