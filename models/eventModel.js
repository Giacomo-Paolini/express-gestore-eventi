const fs = require('fs');
const path = require('path');

class Event {
    constructor (id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    static readingDb() {

        const dbPath = path.join(__dirname, '..', 'db', 'events.json');
        try {
            const db = fs.readFileSync(dbPath, 'utf-8');
            console.log(db);
            return JSON.parse(db);

        } catch (err) {
            console.log(err.message);
            return [];
        }
    }

    static writingDb(newData) {

        const dbPath = path.join(__dirname, '..', 'db', 'events.json');

        try {
            const db = fs.readFileSync(dbPath, 'utf-8');
            
            const events = JSON.parse(db);

            events.push(newData);

            const updatedData = JSON.stringify(events);

            fs.writeFileSync(dbPath, updatedData, 'utf-8');

            console.log('Dati scritti nel file con successo.');
        } catch (err) {
            console.error(err.message);
        }
    }

    static getEvents(event) {
        const dbPath = path.join(__dirname, '..', 'db', 'events.json');

        const db = fs.readFileSync(dbPath, 'utf-8');

        db.forEach(element => {
            element.id === event.id
        });
    }
}

module.exports = Event;