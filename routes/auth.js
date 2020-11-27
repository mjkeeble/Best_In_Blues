const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
}

router.get('/webmaster', (req, res, next) => {
    res.render('maintenance/adminLogin');
});

router.get('/admin/:id/edit', loginCheck(), (req, res) => {
    Admin.findById(req.params.id)
        .then(admin =>{
            res.render('maintenance/admins/editAdmin', { admin })
        })
        .catch(err => {
            console.log(err);
        });
})

router.get('/thanks', (req, res, next) => {
    res.render('thanks');
});


router.post('/login', (req, res, next) => {
    // get username and password
    const { adminName, password } = req.body;
    // check if adminname correct. if not render again
    Admin.findOne({ adminName: adminName })
        .then(found => {
            if (found === null) {
                res.render('maintenance/adminLogin', { message: 'Invalid credentials' })
                return;
            }
            // check password
            if (bcrypt.compareSync(password, found.password)) {
                req.session.user = found;
                res.redirect('/adminMenu');
                return;
            } else {
                res.render('maintenance/adminLogin', { message: 'Invalid credentials' })
                return;
            }
        })
});

router.post('/admin/add', loginCheck(), (req, res, next) => {
    const { adminName, password, password2 } = req.body;
    // check pasword length
    if (password.length < 8) {
        res.render('maintenance/admins/addAdmin', { message: 'Passwort muss mindestens 8 Zeichen enthalten' });
        return;
    }
    //  check if both versions of teh password are the same
    if (password !== password2) {
        res.render('maintenance/admins/addAdmin', { message: 'Die eingegebenen Passwörter sind nicht gleich. Bitte noch mal versuchen' });
        return;
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
                res.render('maintenance/adminMenu')
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

router.get('/admin/:id/delete', loginCheck(), (req, res) => {
    Admin.find()
        .then(adminList => {
            if (adminList.length <= 1) {
                return;
            } else {
                //identify if it is the current user. If so 
                // terminate session after deletion of user
                Admin.findByIdAndRemove(req.params.id)
                    .then(() => {
                        res.redirect('/maintainAdminsList')
                    })
            }
        })
        .catch(err => {
            console.log(err);
        });
})

router.post('/admin/:id/edit', loginCheck(), (req, res) => {
    console.log(`load edit admin form`);
    const { adminName, email, OldPassword, NewPassword, newPassword2 } = req.body;
    if (OldPassword === '' && NewPassword === '' && newPassword2 === '') {
        Admin.findByIdAndUpdate(req.params.id, {
            adminName: adminName,
            email: email
        })
        return;
    }
    if (OldPassword === '' ||
        NewPassword === '' ||
        newPassword2 === '' ||
        NewPassword !== newPassword2) {
        Admin.findById(req.params.id)
        then(found => {
            res.render('maintenance/admins/editAdmin', { found, message: "Passwörter haben nicht gestimm. Bitte nochmal versuchen" });
            return;
        })
    }
    Admin.findById(req.params.id)
        .then(found => {
            if (bcrypt.compareSync(OldPassword, found.password)) {
                const salt = bcrypt.genSaltSync()
                const hash = bcrypt.hashSync(NewPassword, salt);
                Admin.findByIdAndUpdate(req.params.id, {
                    adminName: adminName,
                    email: email,
                    password: hash
                })
                res.redirect("/maintainAdminsList")
            }
        })
        .catch(err => {
            console.log(err);
        });
});



module.exports = router;