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
        if (this.props.tile._tileLinkType == 'externalLink') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._courseExternalLink);
            } else {
                return window.location = this.props.tile._courseExternalLink;
            }
        } else if (this.props.tile._tileLinkType == 'resource') {
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink(this.props.tile._tileResourceUpload);
            } else {
                return window.location = this.props.tile._tileResourceUpload;
            }
        } else {
            var courseSlugOrId = getSlugOrId(_.find(this.props.courses, {_id: this.props.tile._tileCourseLink}));
            if (this.props.tile._shouldOpenNewWindow) {
                return openNewWindowWithLink('/courses/' + courseSlugOrId);
            } else {
                return window.location = '/courses/' + courseSlugOrId;
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