// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Project = require('../models/Project');

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
}

router.get('/project/:id/delete', loginCheck(), (req, res) => {
    console.log(`delete project`);
    console.log(req.body);
    Project.findByIdAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/maintainProjectsList')
        })
        .catch(err => {
            console.log(err);
        })
});


router.get('/project/:id/edit', loginCheck(), (req, res) => {
    console.log(`open/project edit form`);
    Project.findById(req.params.id)
        .then(project => {
            console.log(project);
            res.render("maintenance/projects/editProject", { project, status: 'edit' })
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/project/:id/edit', (req, res) => {
    console.log(`update/project based on edit form`);
    console.log(req.body);
    const { name, description, image, linkUrl, linkText, display } = req.body;
    Project.findByIdAndUpdate(req.params.id, {
        name: name,
        description: description,
        image: image,
        linkUrl: linkUrl,
        linkText: linkText,
        display: display
    })
        .then(() => {
            // res.render('news')})
            res.redirect('/maintainProjectsList')
        })
        .catch(err => {
            console.log(err);
        })

});

router.get('/project/add/', loginCheck(), (req, res) => {
    console.log(`open / project add form`);
    res.render("maintenance/projects/editProject")
});


router.post('/Project/add', (req, res, next) => {
    console.log(`calling project add`) // not sure what to do here with the array
    const { name, description, image, linkUrl, linkText, display } = req.body;
    Project.create({
        name: name,
        description: description,
        image: image,
        linkUrl: linkUrl,
        linkText: linkText,
        display: display
    })
        .then(() => {
            // res.render('news')})
            res.redirect('/projects')
        })
        .catch(err => {
            console.log(err);
        })
});



module.exports = router;