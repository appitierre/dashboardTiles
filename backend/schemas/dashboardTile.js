var mongoose = require('mongoose');

var tiles = mongoose.Schema({
    "title": String,
    "displayTitle": String,
    "description": String,
    "_poster": String,
    "_largePoster": String,
    "_linkType": {type: String, default: 'course'},
    "_courseLink": {type: mongoose.Schema.Types.ObjectId, ref:'Course'},
    "_resourceUpload": String,
    "_link": String,
    "_shouldOpenNewWindow": {type: Boolean, default: true},
    "_isPublished": {type: Boolean, default: false},
    "_createdAt": {type: String, default: Date.now},
    "_createdBy": {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    "_updatedAt": {type: String, default: Date.now},
    "_updatedBy": {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

var items = mongoose.Schema({
    "itemIndex": Number,
    "displayTitle": {type: String, default: ''},
    "description": {type: String, default: ''},
    "_tilesPerRow": {type: Number, default: 3},
    "_shouldTilesStretchAcrossRows": {type: Boolean, default: false},
    "_groups": [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}],
    "_tiles": [tiles]
})

module.exports = {
    "_type": {type: String, default: 'dashboardTile'},
    "_items": [items]
}