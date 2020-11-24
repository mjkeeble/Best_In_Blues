
const mongoose = require('mongoose');
const Gig = require('../../models/Gig');

mongoose.connect(`mongodb://localhost/PROJECT-Jan-Hirte`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedGigs = [
    {
        "date": "2020-11-20",
        "town": "Berlin",
        "venue": "Yorckschlösschen"
    },
    {
        "date": "2020-12-01",
        "town": "Berlin",
        "venue": "Blues Garage"
    },
    {
        "date": "2020-12-15",
        "town": "Grossbeeren",
        "venue": "Blues Night"
    },
    {
        "date": "2021-01-15",
        "town": "Göhren",
        "venue": "Regenbogen Camp"
    }
];

Gig.create(seedGigs)
    .then(adminsFromDB => {
        console.log(`Created ${adminsFromDB.length} gigs`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while getting gigs from the DB: ${err}`));