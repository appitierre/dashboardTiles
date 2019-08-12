import React from 'react';
import createReactClass from 'create-react-class';
import openNewWindowWithLink from 'helpers/openNewWindowWithLink';

var DashboardTile = createReactClass({

    getGraphicStyle: function() {
        var backgroundImage = 'url("' + this.props.tile._poster + '")';

        return {
            backgroundImage: backgroundImage
        }
    },

    onTileClicked: function() {
        if (this.props.tile._shouldOpenNewWindow) {
            return openNewWindowWithLink(this.props.tile._link);
        } else {
            return window.location = this.props.tile._link;
        }
    },

    renderGraphic: function() {
        if (this.props.tile._poster) {
            return (
                <div 
                    className="dashboard-tiles-tile-graphic" 
                    style={this.getGraphicStyle()}>
                </div>
            );
        }
    },

    renderTitle: function() {
        if (this.props.tile.displayTitle) {
            return (
                <div className="dashboard-tiles-tile-title">
                    {this.props.tile.displayTitle}
                </div>
            );
        }
    },

    renderDescription: function() {
        if (this.props.tile.description) {
            return (
                <div className="dashboard-tiles-tile-description">
                    {this.props.tile.description}
                </div>
            );
        }
    },

    render: function() {
        return (
            <div className="dashboard-tiles-tile clearfix" onClick={this.onTileClicked}>
                {this.renderGraphic()}
                <div className="dashboard-tiles-tile-content">
                    {this.renderTitle()}
                    {this.renderDescription()}
                </div>
            </div>
        );
    }

});

export default DashboardTile;