
const mongoose = require('mongoose');
const Admin = require('../../models/Admin');

mongoose.connect(`mongodb://localhost/PROJECT-Jan-Hirte`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedAdmins = [
    {
        "adminName": "Mark",
        "email": "mjkeeble@yahoo.de"
    },
    {
        "adminName": "William"
    }
];

Admin.create(seedAdmins)
    .then(adminsFromDB => {
        console.log(`Created ${adminsFromDB.length} admins`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while getting admins from the DB: ${err}`));