const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    members: [{member: String}],
    description: String,
    image: String,
    linkUrl: String,
    linkText: String,
    display: Boolean
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project; 