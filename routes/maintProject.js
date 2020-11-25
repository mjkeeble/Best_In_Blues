// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router  = express.Router();
const Admin = require('../models/Admin');
const Project = require('../models/Project');

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user){
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
  }

//router.get('/project/delete/:id', (req, res) => {
    //delete an/project
// });

//router.get('/project/edit/:id', (req, res) => {
    //open/project edit form
// });

//router.post('/project/edit/:id', (req, res) => {
    //update/project based on edit form
// });

//router.get('/project/add/', (req, res) => {
    //open/project add form
// });


router.post('/maintianProjectsAdd', (req, res, next) => {
    console.log(`calling project add`) // not sure what to do here with the array
    const { name, members, description, image, linkUrl, linkText, display} = req.body;
    Project.create({ name: name, description: description, image: image, display: display}).then(() =>{
        // res.render('news')})
        res.redirect('/projects')
    });
});
        


module.exports = router;