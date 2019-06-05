var mongoose = require('mongoose');

var tiles = mongoose.Schema({
    "title": String,
    "displayTitle": String,
    "description": String,
    "_poster": String,
    "_linkType": {type: String, default: 'course'},
    "_courseLink": {type: mongoose.Schema.Types.ObjectId, ref:'Course'},
    "_resourceUpload": String,
    "_link": String,
    "_courseLink": String,
    "_shouldOpenNewWindow": {type: Boolean, default: true},
    "_isPublished": {type: Boolean, default: false},
    "_createdAt": {type: String, default: Date.now},
    "_createdBy": {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    "_updatedAt": {type: String, default: Date.now},
    "_updatedBy": {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = {
    "_type": {type: String, default: 'dashboardTile', enum:["link", "course", "resource"]},
    "displayTitle": {type: String, default: 'Tiles'},
    "_tiles": [tiles]
}