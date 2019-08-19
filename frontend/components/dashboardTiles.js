import React from 'react';
import createReactClass from 'create-react-class';
import DashboardTile from './dashboardTile';

var DashboardTiles = createReactClass({

    renderTitle: function(title) {
        return (
            <div className="dashboard-tiles-title">
                {title}
            </div>
        );
    },

    renderItems: function() {
        return _.map(this.props.items, (item) => {
            return (
                <div>
                    {this.renderTitle(item.displayTitle)}
                    <div className="dashboard-tiles-items clearfix">
                        {this.renderDashboardTiles(item._tiles)}
                    </div>
                </div>
            );
        });
    },

    renderDashboardTiles: function(tiles) {
        return _.map(tiles, (tile) => {
            return (
                <DashboardTile
                    key={tile._id}
                    tile={tile}
                />
            );
        });
    },

    render: function() {
        
        if (this.props.items.length === 0) {
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