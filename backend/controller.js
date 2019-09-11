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

        // var dashboardTile = yield DashboardTile.findOne({}).populate({path: '_tiles._courseLink', select: '_id title displayTitle _urlSlug' });

        // dashboardData._dashboardTiles = dashboardTile;

        // return callback();
        
        var dashboardTile = yield DashboardTile.findOne({}).populate({path: '_items._tiles._courseLink', select: '_id title displayTitle _urlSlug' });
        var filteredItemsArray = []; 
        
        dashboardData._dashboardTiles = dashboardTile;
                
        //Iterates over all dashboard items
        _.each(dashboardData._dashboardTiles._items, (item) => {
            //Iterates over again with each group
            _.each(item._groups, (group) => {
                //Skips duplicates
                if(_.find(filteredItemsArray, { '_id': item._id })) return;
                //Matches user groups and item groups then pushes items to new array
                _.find(currentData.user._groups, (usersGroup) => {
                    if (String(usersGroup) === String(group)) {
                        return filteredItemsArray.push(item);
                    }
                });
            });
        });

        dashboardData._dashboardTiles._items = filteredItemsArray;


        return callback();

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

    updateDashboardTiles: Promise.coroutine(function*(req, callback) {
        try {
            var dashboardTile = yield DashboardTile.findOneAndUpdate({}, req.body, {new: true});
        
            return callback(null, {_dashboardTiles: dashboardTile});
        } catch (err) {
            if (err._statusCode) {
                callback(err);
            }
            callback({_statusCode: 500, message: err.message});
        }
    })

}