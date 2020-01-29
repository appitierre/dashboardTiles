import React, {Fragment} from 'react';
import createReactClass from 'create-react-class';
import DashboardTile from './dashboardTile';
import LP from 'modules/app/helpers/lp';

var DashboardTiles = createReactClass({

    renderTitle: function(title) {
        return (
            <h2 className="dashboard-tiles-title">
                {title}
            </h2>
        );
    },

    renderDescription: function(description) {
        return (
            <p className="dashboard-tiles-description">
                {description}
            </p>
        )
    },

    renderItems: function() {
        return _.map(this.props.items, (item, index) => {

            var publishableDashboardTiles = _.filter(item._tiles, {'_isPublished': true});

            if (publishableDashboardTiles.length === 0) {
                return null;
            };

            return (
                <Fragment key={`dashboardTilesItem${index+1}`}>
                    {this.renderTitle(item.displayTitle)}
                    {this.renderDescription(item.description)}
                    <ul role="list" className="dashboard-tiles-items clearfix">
                        {this.renderDashboardTiles(item._tiles, item._tilesPerRow, item._shouldTilesStretchAcrossRows)}
                    </ul>
                </Fragment>
            );
        });
    },

    renderDashboardTiles: function(tiles, tilesPerRow, shouldTilesStretchAcrossRows) {
        return _.map(tiles, (tile) => {

            if (!tile._isPublished) {
                return null;
            };
            
            return (
                <DashboardTile
                    tilesPerRow={tilesPerRow}
                    shouldTilesStretchAcrossRows={shouldTilesStretchAcrossRows}
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
            <section className="dashboard-tiles" aria-label={LP('dashboard', 'dashboardTilesSectionAriaLabel', 'sentencecase')}>
                {this.renderItems()}
            </section>
        );
    }

});

export default DashboardTiles;
