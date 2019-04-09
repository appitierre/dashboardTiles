var Bloom = require(global.app + '/bloom');
var Promise = require('bluebird');
var async = require('async');
var DashboardTile = require('./models/dashboardTile');
var EditDashboardTilesSchema = require('./schemas/editDashboardTiles');
var _ = require('lodash');
/*var CourseBooking = require('./models/courseBooking');
var User = require(global.app + '/models/user');
var AddCourseBookingSchema = require('./schemas/addCourseBooking');
var EditCourseBookingSchema = require('./schemas/editCourseBookingSchema');*/

var getDashboardItemSettings = require(global.app + '/helpers/settings/getDashboardItemSettings');

Bloom.registerHook('dashboard:learner', Promise.coroutine(function*(dashboardData, currentData, callback) {
        
    var dashboardTilesSettings = yield getDashboardItemSettings(currentData.settings, 'learner', 'dashboardTiles', currentData.user);

    if (dashboardTilesSettings && dashboardTilesSettings._isEnabled) {

        DashboardTile.findOne({}, function(err, dashboardTile) {
            dashboardData._dashboardTiles = dashboardTile;
            return callback();
        });

    } else {
        return callback();
    }
}));

module.exports = {
    
    fetchDashboardTiles: function(req, callback) {

        DashboardTile.findOne({}, function(err, dashboardTile) {
            if (err) {
                return callback({_statusCode: 500, message: 'Server error'})
            }
            return callback(null, {_schema: EditDashboardTilesSchema, _dashboardTiles: dashboardTile});
        });
    },

    updateDashboardTiles: function(req, callback) {
        DashboardTile.findOneAndUpdate({}, req.body, {new: true}, function(err, dashboardTile) {
            if (err) {
                return callback({_statusCode: 500, message: 'Server error'})
            }
            return callback(null, {_dashboardTiles: dashboardTile});
        });
    }

}