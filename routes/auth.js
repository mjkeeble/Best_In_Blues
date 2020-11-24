const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');


router.get('/webmaster', (req, res, next) => {
    res.render('maintenance/adminLogin');
});

router.post('/login', (req, res, next) => {
    // get username and password
    const { adminName, password } = req.body;
    // check if adminname correct. if not render again
    Admin.findOne({ adminName: adminName })
        .then(found => {
            if (found === null) {
                res.render('maintenance/adminLogin', { message: 'Invalid credentials' })
            }
            // check password
            if (bcrypt.compareSync(password, found.password)) {
                req.session.user = found;
                res.redirect('/adminMenu');
            } else {
                res.render('maintenance/adminLogin', { message: 'Invalid credentials' })
            }
        })
});

router.post('/createAdmin', (req, res, next) => {
    const { adminName, password, password2 } = req.body;
    // check pasword length
    if (password.length < 8) {
        res.render('maintenance/admins/addAdmin', { message: 'Passwort muss mindestens 8 Zeichen enthalten' });
    }
    //  check if both versions of teh password are the same
        if (password !== password2){
        res.render('maintenance/admins/addAdmin', { message: 'Die engegebenen Passwörter sind nicht gleich' });
    }
    // check if user already exists
    Admin.findOne({ adminName: adminName })
        .then(found => {
            if (found !== null) {
                res.render('maintenance/admins/addAdmin', { message: 'Admin existiert schon' });
            } else {
                // create admin
                const salt = bcrypt.genSaltSync();
                console.log(salt);
                const hash = bcrypt.hashSync(password, salt);
                Admin.create({ adminName: adminName, password: hash })
            };
        })
        .catch(err => {
            next(err);
        })
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            next(err);
        } else {
            res.redirect('/')
        }
    })
});

module.exports = router;