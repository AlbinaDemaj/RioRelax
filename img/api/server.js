const express = require('express');
const app = express();

// Middleware për të lexuar JSON
app.use(express.json());

// Endpoint bazik
app.get('/', (req, res) => {
    res.send('Hotel API është gati!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveri po punon në http://localhost:${port}`);
});


let bookings = [];

// Krijo rezervim
app.post('/bookings', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    res.status(201).send(booking);
});

// Merr të gjitha rezervimet
app.get('/bookings', (req, res) => {
    res.send(bookings);
});


