const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Event = require('../Models/event');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    const events = Event.getAllEvents();
    res.render('eventsList', { events: events });
});

router.get('/add-event', (req, res) => {
    res.render('addEvent');
});

router.get('/update-event/:id', (req, res) => {
    const eventId = parseInt(req.params.id, 10); // Преобразуем id в число
    const event = Event.getEventById(eventId);

    if (!event) {
        return res.status(404).send('Event not found');
    }

    const pageTitle = event.title || 'Edit Event';

    res.render('edit', { event: event, pageTitle: pageTitle });
});

router.post('/add-event', (req, res) => {
    if (!req.body) {
        return res.status(400).send('No data received');
    }
    
    const { title, startDate, endDate, guests } = req.body;

    const guestsArray = Array.isArray(guests) ? guests : [guests];

    Event.addEvent({ title, startDate, endDate, guests: guestsArray });
    
    res.redirect('/');
});

router.post('/update-event/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Преобразуем id в число
    const { title, startDate, endDate, guests } = req.body;

    const guestsArray = Array.isArray(guests) ? guests : [guests];

    Event.updateEvent(id, { title, startDate, endDate, guests: guestsArray });


    res.redirect('/');
});

router.post('/delete-event/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Преобразуем id в число
    Event.deleteEvent(id);

    res.redirect('/');
});

module.exports = router;