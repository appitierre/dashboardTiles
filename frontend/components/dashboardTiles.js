import React from 'react';
import DashboardTile from './dashboardTile';
import LP from 'helpers/lp';

var DashboardTiles = React.createClass({

    renderTitle: function(title) {
        return (
            <h2 className="dashboard-tiles-title">
                {title}
            </h2>
        );
    },

    renderItems: function() {
        return _.map(this.props.items, (item) => {
            return (
                <div>
                    {this.renderTitle(item.displayTitle)}
                    <ul role="list" className="dashboard-tiles-items clearfix">
                        {this.renderDashboardTiles(item._tiles)}
                    </ul>
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
