import React from 'react';
import openNewWindowWithLink from 'helpers/openNewWindowWithLink';
import getSlugOrId from 'helpers/getSlugOrId';

var DashboardTile = React.createClass({

    getGraphicStyle: function() {
        var backgroundImage = 'url("' + this.props.tile._poster + '")';

        return {
            backgroundImage: backgroundImage
        }
    },

    onTileClicked: function() {
        if (this.props.tile._linkType == 'externalLink') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._link);
            } else {
                return window.location = this.props.tile._link;
            }
        } else if (this.props.tile._linkType == 'resource') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._resourceUpload);
            } else {
                return window.location = this.props.tile._resourceUpload;
            }
        } else if (this.props.tile._linkType == 'course') {
            var courseSlugOrId = getSlugOrId(this.props.tile._courseLink);
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink('/courses/' + courseSlugOrId);
            } else {
                return window.location = '/courses/' + courseSlugOrId;
            }
        } else {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._link);
            } else {
                return window.location = this.props.tile._link;
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