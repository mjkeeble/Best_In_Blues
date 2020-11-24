
const mongoose = require('mongoose');
const News = require('../../models/News');

mongoose.connect(`mongodb://localhost/PROJECT-Jan-Hirte`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedNews = [
    {
        "title": "Ginger Blues ist nominiert für den begehrten Preis der deutschen Schallplattenkritik in der Kategorie Blues",
        "image": "",
        "links": [
            {
                "url": "#",
                "linkText": "Jetzt Bestellen!",
            },
        ],
        "text": "Das sind die Nominierten für die Bestenliste IV/20 Kategorie Blues vom Preis der deutschen Schallplattenkritik, drückt uns die Daumen! 😀 Entscheidung im November! Und bestellen nicht vergessen! 😁\n\nBad Temper Joe: The Memphis Tape (Timezone)\nGinger Blues: Unknowable Journey (Berlin Blue)\nLarkin Poe: Self Made Man (Tricky Woo)\nSchwarzbrenner: Der Ruf der Dichter (Wolfgang Becker)",
    },

    {
        "title": "Die neue Webseite ist Live!",
        "image": "",

        "text": "Nach vielen Jahren hat mein Internetpräsenz eine Generalüberholung bekommen.\nHier bekommen Sie wie gewohnt alle wichtige Informationen über meine Aktivitäten und Auftrittstermine. Das Shop ist weiterhin für Ihre Bestellungen geöffnet und jetzt sie es auf dem Smatphone genauso gut aus wie auf dem Rechner - probieren Sie es aus!\n\nVielen Dank an Mark Keeble und William Campell für die Konzeption und Umsetzung.",
    },

    {
        "title": "Musicians United Against Corona jetzt auf YouTube!",
        "links": [
            {
                "url": "https://www.youtube.com/playlist?list=PLNkdr6DJUuem0tF-rhDC06LFFBn2stQ9O",
                "linkText": "Musicians United Against Corona - alle Konzerte  auf YouTube",
            },
        ],
        "text": "Im Fruhjahr und Sommer habe ich eine Reihe Streamingkonzerte mit befreundeten Musiker veranstaltet, um sie finanziell zu unterstützen. Jetzt sind all Konzerte in voller Länge bei YouTube zu sehen",
    },

    {
        "title": "Musicians United Against Corona  - Sie können immer noch spenden!",
        "date": "30 November, 2020",
        "image": "",
        "links": [
            {
                "url": "https://www.youtube.com/playlist?list=PLNkdr6DJUuem0tF-rhDC06LFFBn2stQ9O",
                "linkText": "Musicians United Against Corona - alle Konzerte jetzt auf YouTube",
            },
            {
                "url": "https://www.betterplace.me/musicians-united-against-corona8?utm_campaign=user_share&utm_medium=manage_share_facebook&utm_source=Facebook&fbclid=IwAR2czWP-HlTheadyM0rEvU4hU9Y3MYslSSUlswdQPUUA7crWtAmEbJEd5Q8",
                "linkText": "Klicken Sie hier, um Ihre lieblingsmusiker zu unterstützen!",
            }
        ],
        "text": "Die Situation für Musiker bleibt weiterhin sehr angespannt, aber Sie müssen nicht auf Blues verzichten! Schauen Sie die Musicians United Against Corona Konzerte einfach noch mal auf YouTube an.",
    }
];

News.create(seedNews)
    .then(newsFromDB => {
        console.log(`Created ${newsFromDB.length} articles`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while getting news from the DB: ${err}`));
