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
        if (this.props.tile._tileUploadType == 'externalLink') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._courseExternalLink);
            } else {
                return window.location = this.props.tile._courseExternalLink;
            }
        } else if (this.props.tile._tileUploadType == 'resource') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._tileResourceUpload);
            } else {
                return window.location = this.props.tile._tileResourceUpload;
            }
        } else {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._courseExternalLink);
            } else {
                return window.location = this.props.tile._courseExternalLink;
            }
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
        console.log(this.props);
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