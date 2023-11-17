const events = require('../db/events.json')
const Event = require('../models/eventModel')

function index (req, res) {
    const prova = Event.readingDb();
    res.send(
        prova
    );
};

function store (req, res) {
    const newData = req.body;
    console.log(newData);
    Event.writingDb(newData);
    res.status(201).send(newData);
};

function update (req, res) {

};

module.exports = {
    index,
    store,
    update
}