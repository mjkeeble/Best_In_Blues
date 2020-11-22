
const mongoose = require('mongoose');
const Project = require('../../models/Project');

mongoose.connect(`mongodb://localhost/PROJECT-Jan-Hirte`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedProjects = [
    {
        "name": "Jan Hirte’s Blue Ribbon",
        "members": [
            { "member": "Matthias Falkenau - Orgel/Piano" },
            { "member": "Martin Rose - Bass/Gesang" },
            { "member": "Jan Hirte - Gitarre/Gesang" },
            { "member": "Toni Nissl - Schlagzeug" },
            { "member": "Patrick Braun - Tenorsax" },
            { "member": "Wolfram Segond von Banchet - Baritonsax" }
        ],
        "description": "Blues und Soul vom feinsten mit Saxophon Power und Hammond. „Let it roll“ wurde nominiert für den Preis der deutschen Schallplattenkritik",
        "image": "",
        "display": true
    },
    {
        "name": "Ginger Blues",
        "members": [
            { "member": "Jessie Gordon - Gesang/Ukulele" },
            { "member": "Jan Hirte - Gitarre/Lapsteel/Gesang" },
            { "member": "Dorian Gollis - Kontrabass/Gesang" },
            { "member": "Matthias Falkenau - Piano/Orgel/Gesang"}
        ],
        "description": "Eine gegenwärtige, höchst lebendige, meist heitere Reise durch die Geschichte der populären Musik - Ragtime, Boogie, Swing und Country, Blues-Klassiker und Jazz-Standards wechseln sich ab mit Eigenkompositionen. Das ganze getoppt von der fantastischen Stimme von Jessie Gordon. Die aktuelle CD „unknowable journey“ wurde ausgezeichnet in der Bestenliste des Preises der deutschen Schallplattenkritik als bestes Album!",
        "image": "",
        "display": true
    },
    {
        "name": "Mitch Kashmar with the Blues & Boogie Kings",
        "members": [
            { "member": "Mitch Kashmar - Harp/Gesang"},
            { "member": "Niels von der Leyen - Piano"},
            { "member": "Andreas Bock - Schlagzeug"},
            { "member": "Jan Hirte - Gitarre/Gesang"}
        ],
        "description": "Mitch Kashmar gehört weltweit zu den Top 5 an der Harp. Bekannt geworden durch seine Band „Pontiax“ und seine Arbeit bei „War“. Begleitet von dem Virtuosen Niels von der Leyen am Boogie Piano und dem Blues Award Gewinner Andreas Bock am Schlagzeug.",
        "image": "",
        "display": true
    },
    {
        "name": "The Berlin Blues Allstar Band",
        "members": [
            { "member": "Dorrey Lyles - Gesang"},
            { "member": "Aine Fujioka - Schlagzeug"},
            { "member": "Daryl Taylor - Bass/Gesang"},
            { "member": "Matthias Falkenau - Orgel/Piano"},
            { "member": "Jan Hirte - Gitarre/Gesang"}
        ],
        "description": "Die Crème de la Crème der Berliner Blues Szene. International besetzt mit Musikern aus Japan, USA und Deutschland. Dorrey’s gewaltige Stimme begeistert jedesmal die Zuhörer. Die Band fand sich zusammen bei Sessions im legendären Berliner Club „White Trash Fast Food“ und bildet ein starkes Fundament.",
        "image": "",
        "display": true
    },
    {
        "name": "Blues Explosion",
        "members": [
            { "member": "Jan Hirte - Gitarre/Gesang5"},
            { "member": "Dorian Gollis - Bass"},
            { "member": "Andreas Bock -  Schlagzeug"},
            { "member": "Matthias Falkenau - Orgel/Piano"},
            { "member": "Frank Rihm - Harp/Gesang"}
        ],
        "description": "Eine Fusion aus den Blues & Boogie Kings und Ginger Blues. Entstanden zu Corona Zeiten auf einem Festival in der Schweiz. Gespielt wird Blues, Blues, Blues. Special guest aus Bremen Frank Rihm an der Harp & Gesang.",
        "image": "",
        "display": true
    },
    {
        "name": "Zydeco Annie & the Swampcats",
        "members": [
            { "member": "Anja Baldauf - Akkordeon/Gesang"},
            { "member": "Rolf Berger - Gitarre/Percussion/Gesang"},
            { "member": "Marco Piludu - Bass/Gesang"},
            { "member": "Stefan Baldauf - Schlagzeug/Gesang"},
            { "member": "Jan Hirte - Gitarre/Gesang"}
        ],
        "description": "Zydeco & Cajun at it’s best. Akkordeon satt von Anja Baldauf, the Queen of Zydeco in Deutschland. Es darf getanzt werden!",
        "image": "",
        "display": true
    },
    {
        "name": "The Rollin Sapphires",
        "members": [
            { "member": "Alex Hirte - Gesang"},
            { "member": "Nicole Wälti - Bass"},
            { "member": "Carlos Dalelane - Schlagzeug"},
            { "member": "Jan Hirte - Gitarre/Gesang"}
        ],
        "description": "Alex und Jan harmonieren perfekt mit 2 stimmigem Gesang und gefühlvoll interpretierten Songs von Keb Mo, Imelda Mae, Slim Harpo …",
        "image": "",
        "display": true
    },
    {
        "name": "Mademyday",
        "members": [
            {"member":"Matthias Falkenau - Orgel/Piano"},
            {"member":"Arcadius Didavi - Bass"},
            {"member":"Max Grevenbrock - Schlagzeug"},
            {"member":"Jan Hirte - Gitarre"}
        ],
        "description": "Gespielt werden rein instrumental Klassiker des Souls und Jazz/Blues von z.B. Stevie Wonder, Stuff, John Scofield, Ray Charles ….",
        "image": "",
        "display": true
    },
    {
        "name": "Mademyday",
        "members": [
            {"member": "Matthias Falkenau - Orgel/Piano"},
            {"member": "Arcadius Didavi - Bass"},
            {"member": "Max Grevenbrock - Schlagzeug"},
            {"member": "Jan Hirte - Gitarre"}
        ],
        "description": "Gespielt werden rein instrumental Klassiker des Souls und Jazz/Blues von z.B. Stevie Wonder, Stuff, John Scofield, Ray Charles ….",
        "image": "",
        "display": true
    },
    {
        "name": "Musicians United Against Corona",
        "members": [
            {"member": "Konzert 1: Matthias Falkenau, Alex La Douce und Jan Hirte"},
            {"member": "Konzert 2: Pan Salmenhaara"},
            {"member": "Konzert 3: Kat Baloun und Jan Hirte"},
            {"member": "Konzert 4: Pugsley Buzzard, Micha Maass und Jan Hirte"},
            {"member": "Konzert 5: Dorrey Lyles, Matthias Falkenau und Jan Hirte"},
            {"member": "Konzert 6: Johannes Niemann und Jakob Deider (NotReallyBluesBand) und} Jan Hirte"},
            {"member": "Konzert 7: Christian Rannenberg, Patrick Braun und  Jan Hirte"},
            {"member": "Konzert 8: Hattie St. John und Jan Hirte"},
            {"member": "Konzert 9: Tom Blacksmith, Che Carlito und Jan Hirte"},
            {"member": "Konzert 10: Amelie (Amy) Protscher und Jan Hirte"}
        ],
        "description": "Eine Reihe Wohnzimmer-,Schlafzimmer- und geschlossene-Kneipe-Nebenan-Konzerte mit befreundeten Musiker aus der Berliner Bluesszene veranstaltet im Frühjahr/Sommer 2020 zur Unterstützung der Beteiligten.Alle Konzerte sind inzwischen in volle Länge auf YouTube zu sehen",
        "image": "",
        "linkUrl": "https://www.youtube.com/playlist?list=PLNkdr6DJUuem0tF-rhDC06LFFBn2stQ9O",
        "linkText": "Musicians United Against Corona auf YouTube",
        "display": true
    },
    {
        "name": "Berlin Blue Records",
        "members": [
            {"member": "Jan Hirte - Mitbegründer"},
            {"member": "Matthias Falkenau - Mitbegründer"}
        ],
        "description": "Das zur <a href=\"http://www.germaica.net\">Germaican Records Familie</a> Germaican Records Familie gehörende Label der Berliner Musiker und Produzenten <a href=\"https://www.matthiasfalkenau.com\">Matthias Falkenau</a> und <a href=\"https.janhirte.com\">Jan Hirte</a> wurde vornehmlich gegründet, um in vollständiger künstlerischer Freiheit eigene Albumproduktionen zu realisieren. Binnen eines Jahres erschienen so bereits zwei von der Kritik hochgelobte CD's.",
        "image": "https://lirp-cdn.multiscreensite.com/fd360a08/dms3rep/multi/opt/BBR_Logo_black-694e229e-960w.png",
        "display": true
    },
];

Project.create(seedProjects)
    .then(projectsFromDB => {
        console.log(`Created ${projectsFromDB.length} projects`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while getting projects from the DB: ${err}`));
