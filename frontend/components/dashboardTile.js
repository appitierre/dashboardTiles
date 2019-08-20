import React from 'react';
import createReactClass from 'create-react-class';
import openNewWindowWithLink from 'helpers/openNewWindowWithLink';
import getSlugOrId from 'helpers/getSlugOrId';

var DashboardTile = createReactClass({

    getGraphicStyle: function() {
        var backgroundImage = 'url("' + this.props.tile._poster + '")';

        return {
            backgroundImage: backgroundImage
        }
    },

    onTileClicked: function() {
        var shouldOpenNewWindow = this.props.tile._shouldOpenNewWindow;

        switch (this.props.tile._linkType) {
            case 'resource': {
                return shouldOpenNewWindow ? openNewWindowWithLink(this.props.tile._resourceUpload) : window.location = this.props.tile._resourceUpload;
            }
            case 'course': {
                var courseSlugOrId = getSlugOrId(this.props.tile._courseLink);
                return shouldOpenNewWindow ? openNewWindowWithLink('/courses/' + courseSlugOrId) : window.location = '/courses/' + courseSlugOrId;
            }
            default: {
                return shouldOpenNewWindow ? openNewWindowWithLink(this.props.tile._link) : window.location = this.props.tile._link;
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
            <li role="listitem" className="dashboard-tiles-tile clearfix" >
                <a
                    onClick={this.onTileClicked}
                    tabIndex="0"
                    aria-label={`${this.props.tile.displayTitle}. ${this.props.tile.description || ''}`}>
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