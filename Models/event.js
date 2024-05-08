let events = [
    {
        id: 1,
        title: "Sister's birthday",
        startDate: '2024-05-14T18:00',
        endDate: '2024-05-14T21:00',
        guests: ['Brother', 'Mam', 'Dad']
    },
    {
        id: 2,
        title: 'Trip to Tatry',
        startDate: '2024-06-07 10:00',
        endDate: '2024-06-14 18:00',
        guests: ['Pioter', 'Maciej', 'Krzystof']
    }
];

module.exports = {
    getAllEvents: function() {
        return events;
    },
    addEvent: function(newEvent) {
        newEvent.id = events.length + 1;
        events.push(newEvent);
    },
    getEventById: function(id) {
        return events.find(event => event.id === id);
    },
    updateEvent: function(id, updatedEvent) {
        events = events.map(event => {
            if (event.id === id) {
                return {
                    ...event,
                    ...updatedEvent
                };
            }
            return event;
        });
    },
    deleteEvent: function(id) {
        events = events.filter(event => event.id !== id);
    }
};