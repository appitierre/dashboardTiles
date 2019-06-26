import React from 'react';
import openNewWindowWithLink from 'helpers/openNewWindowWithLink';

var DashboardTile = React.createClass({

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
            <li role="listitem" className="dashboard-tiles-tile clearfix" >
                <a 
                    onClick={this.onTileClicked} 
                    tabIndex="0" 
                    aria-label={`${this.props.tile.displayTitle}. ${this.props.tile.description}`}>
                    {this.renderGraphic()}
                    <div className="dashboard-tiles-tile-content">
                        {this.renderTitle()}
                        {this.renderDescription()}
                    </div>
                </a>
            </li>
        );
    }

});

export default DashboardTile;