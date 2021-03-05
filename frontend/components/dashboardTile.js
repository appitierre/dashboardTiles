import React from 'react';
import createReactClass from 'create-react-class';
import openNewWindowWithLink from 'modules/app/helpers/openNewWindowWithLink';
import { getHooks } from 'bloom';
import getSlugOrId from 'modules/app/helpers/getSlugOrId';

var DashboardTile = createReactClass({

    getGraphicStyle: function() {
        var posterUrl = this.props.tile._poster || this.props.tile._largePoster;

        if (this.props.tilesPerRow === 1 && this.props.tile._largePoster) {
            posterUrl = this.props.tile._largePoster;
        }
            
        var backgroundImage = 'url("' + posterUrl + '")';

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

                var preLoadCourseHooks = getHooks('preLoad:course');

                _.each(preLoadCourseHooks, (hook) => {
                    hook(this.props.tile._courseLink._id);
                });

                return shouldOpenNewWindow ? openNewWindowWithLink('/courses/' + courseSlugOrId) : window.location = '/courses/' + courseSlugOrId;
            }
            default: {
                return shouldOpenNewWindow ? openNewWindowWithLink(this.props.tile._link) : window.location = this.props.tile._link;
            }
        }
    },

    renderGraphic: function() {
        if (this.props.tile._poster || this.props.tile._largePoster) {
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

    getDashboardTileStyles: function() {
        var flexBasis = '31%';
        var flexGrow = this.props.shouldTilesStretchAcrossRows ? 1 : 0;

        switch (this.props.tilesPerRow) {
            case 1: {
                flexBasis = '100%'
                break;
            }
            case 2: {
                flexBasis = '48%'
                break;
            }
            case 3: {
                flexBasis = '31%'
                break;
            }
        }

        return {flexBasis, flexGrow}
    },

    render: function() {
        return (
            <li role="listitem" className="dashboard-tiles-tile clearfix" style={this.getDashboardTileStyles()}>
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
