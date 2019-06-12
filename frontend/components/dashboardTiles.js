import React from 'react';
import DashboardTile from './dashboardTile';
import LP from 'helpers/lp';

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
                />
            );
        });
    },

    render: function() {
        
        if (this.props.tiles.length === 0) {
            return null;
        }

        return (
            <section 
                className="dashboard-tiles"
                aria-label={LP('dashboard', 'dashboardTilesSectionAriaLabel', 'sentencecase')}
            >
                {this.renderTitle()}
                {this.renderItems()}
            </section>
        );
    }

});

export default DashboardTiles;