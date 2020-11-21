const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    description: String,
    members: [{name: String, instrument:String}],
    image: String,
    link: String
});

const Project = mongoose.model('Project', adminSchema);
module.exports = Project;