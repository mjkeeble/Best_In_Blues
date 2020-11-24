
const mongoose = require('mongoose');
const ShopArticle = require('../../models/ShopArticle');

mongoose.connect(`mongodb://localhost/PROJECT-Jan-Hirte`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedShopArticles = [
    {
        "artist": "Ginger Blues",
        "title": "unknowable journey",
        "year": 2020,
        "description": "Die neue CD des Berliner Quartetts um die charismatische Sängerin Jessie Gordon aus Australien.",
        "price": 20,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143962/janhirte/unknowable_journey_tateqf.jpg",
        "promotionText": "Gewinner des Preises der deutschen Schallplattenkritik 04/2020!",
        "promotionImage": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.schallplattenkritik.de%2F&psig=AOvVaw0JvZk_EUp0_nPRjban9qrP&ust=1605941896559000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDs4_XFkO0CFQAAAAAdAAAAABAN",
        "endorsements": [
            {
                "quote": "Eine gegenwärtige, höchst lebendige und meist heitere Tour quer durch die Geschichte der populären Musik.",
                "source": "Tom Schroeder, Jurymitglied, Preis der deutschen Schallplattenkritik e.V."
            },
            {
                "quote": "Zurücklehnen, Augen schließen und genießen!",
                "source": "Marc Demisch, Präsident „Davos und Klosters sounds good Festival"
            },
            {
                "quote": "…ein Album voller harmonischer Klänge.",
                "source": "Mike Kempf, Soundanalyse"
            }
        ],
        "availability": true,
        "delivery": "1 - 3 Tage",
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/2I4OgFG8Y4FBU28jpfwAXc\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },

    {
        "artist": "Ginger Blues",
        "title": "Berlin Nights",
        "year": 2019,
        "description": "Jan Hirte & Jessie Gordon aus Australien! Absolut hörenswert!!!",
        "price": 18,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143974/janhirte/Berlin_Nights_ucfaj9.jpg",
        "endorsements": [
            {
                "quote": "Fest steht von der ersten Minute an, dass Ginger Blues' \"Berlin Nights\" ohne Zweifel zu den musikalischen Ereignissen gehören, die man nicht vergessen wird.",
                "source": "Joachim 'Joe' Brookes, https://www.rocktimes.info/",
            },
            {
                "quote": "\"Berlin Nights\" is a swinging revue of blues, jazz & ragtime, of a standard that is so rare to heqr these days. Enjoy your journey through the night!",
                "source": "Andreas Ponfick",
            },
        ],
        "available": true,
        "delivery": "1 - 3 Tage",
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/1eGXnLs17GtJx36dX2l368\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },

    {
        "artist": "The Berlin Blues Allstar Band",
        "title": "Barnyard Blues",
        "year": 2020,
        "price": 18,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143962/janhirte/Barnyard_Blues_eengv1.jpg",
        "available": true,
        "delivery": "1 - 3 Tage",
        "endorsements": [
            {
                "quote": "Jan Hirte spielt…eine exzellente Bluesgitarre…Matthias Falkenau ist an den Tasten ein Ass. Die Band agiert tight und sehr souverän…der Sound des Albums ist exzellent und die Abmischung wird allen Ansprüchen gerecht.",
                "source": "Bluesnews"
            }
        ],
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/3vZ3dS5pLLvcQMS5xWCi5W\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },

    {
        "artist": "The Blues & Boogie Kings with Mitch Kashmar",
        "title": "Live, No Jive",
        "year": 2019,
        "description": "Live at Robert's Blues Party, Hildesheim",
        "price": 18,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143968/janhirte/Live_No_Jive_bvlqyp.jpg",
        "endorsements": [
            {
                "quote": "Ein Quartett überagender Musiker, die sich gegenseitig immer und immer wieder zu unglaublichen Höchstleistungen treiben.",
                "source": "Harald Brückel, ChaBah, Kanderner Blues-Club",
            },
        ],
        "available": true,
        "delivery": "1 - 3 Tage",
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/4Z5gscQRPCXL8b8K2ghUue\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },

    {
        "artist": "Jan Hirte's Blue Ribbon",
        "title": "Let it roll",
        "year": 2014,
        "description": "Die großartige Kollaboration zwischen Blue Ribbon und Elen Wendt",
        "price": 15,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143970/janhirte/Let_It_Roll_laeyv6.jpg",
        "endorsements": [
            {
                "quote": "Wendts Stimme ist eine Schöne Mischung  aus melodiösem 60s Soul und Blues vom Delta mit modernen Ausflügen in Richtung Tracey Chapman und Adele",
                "source": "Henry Heggen",
            },
        ],
        "available": true,
        "delivery": "1 - 3 Tage",
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/63cn8huGcESUxxgi68dBLB\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },

    {
        "artist": "Jan Hirte's Blue Ribbon feat. Nayeli",
        "title": "Singing The Blues",
        "year": 2011,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143968/janhirte/Singing_The_Blues_axwt1x.jpg",
        "description": "Live im Yorckschlösschen 2011",
        "price": 15,
        "available": true,
        "delivery": "1 - 3 Tage",
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/3fBOLp2VTsiTM5JTyzzBdk\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    
    {
        "artist": "Jan Hirte's Blue Ribbon",
        "title": "Jan Hirte's Blue Ribbon",
        "year": 2009,
        "image": "https://res.cloudinary.com/markjkeeble/image/upload/v1606143974/janhirte/Blue_Ribbon___And_Friends_wrpdjh.jpg",
        "description": "feat. Guitar Crusher, Bo Gustaffson, Alex Schultz, Wayne Martin, Ines Cagle, Nina T. Davis uva.",
        "price": 15,
        "available": true,
        "spotify": "<iframe src=\"https://open.spotify.com/embed/album/08xqge54BRwF2WhrdAHyDS\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    {
        "artist": "Jan Hirte's Blue Ribbon",
        "title": "Let it roll & Singing the Blues",
        "year": 2014,
        "description": "Beide CDs im Set zum Sonderpreis!",
        "price": 25,
        "available": true,
        "delivery": "1 - 3 Tage",
    },
    {
        "artist": "Jan Hirte's Blue Ribbon",
        "title": "Let it roll, Singing the Blues & Jan Hirte's Blue Ribbon",
        "year": 2014,
        "description": "Alle drei CDs zum Sonderpreis!",
        "price": 30,
        "available": true,
        "delivery": "1 - 3 Tage",
    }
];


ShopArticle.create(seedShopArticles)
    .then(shopFromDB => {
        console.log(`Created ${shopFromDB.length} shop articles`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while getting shop articles from the DB: ${err}`));

