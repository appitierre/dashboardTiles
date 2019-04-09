import React from 'react';
import DashboardTile from './dashboardTile';

var DashboardTiles = React.createClass({

    renderTitle: function() {
        return (
            <div className="dashboard-tiles-title">
                {this.props.title}
            </div>
        );
    },

    renderItems: function() {
        return (
            <div className="dashboard-tiles-items clearfix">
                {this.renderDashboardTiles()}
            </div>
        );
    },

    renderDashboardTiles: function() {
        return _.map(this.props.tiles, (tile) => {
            return (
                <DashboardTile
                    key={tile._id}
                    tile={tile}
                    courses={this.props.courses}
                />
            );
        });
    },

    render: function() {
        
        if (this.props.tiles.length === 0) {
            return null;
        }

        return (
            <div className="dashboard-tiles">
                {this.renderTitle()}
                {this.renderItems()}
            </div>
        );
    }

});

export default DashboardTiles;