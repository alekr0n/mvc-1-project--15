const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Event = require('../Models/event');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/events', (req, res) => {
    const events = Event.getAllEvents();
    res.render('eventsList', { events: events });
});

router.get('/add-event', (req, res) => {
    res.render('addEvent');
});

router.get('/update-event', (req, res) => {
    res.render('edit');
});

router.post('/add-event', (req, res) => {
    console.log(req.body);
    
    if (!req.body) {
        return res.status(400).send('No data received');
    }
    
    const { title, startDate, endDate, guests } = req.body;
    
    Event.addEvent({ title, startDate, endDate, guests });
    
    res.redirect('/events');
});

router.post('/update-event/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, startDate, endDate, guests } = req.body;

    Event.updateEvent(id, { title, startDate, endDate, guests });

    res.redirect('/events');
});

router.post('/delete-event/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Event.deleteEvent(id);

    res.redirect('/events');
});

module.exports = router;