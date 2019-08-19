import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import DashboardTiles from '../components/dashboardTiles';

var DashboardTilesContainer = createReactClass({

    render: function() {
        return (
            <DashboardTiles
                title={this.props.dashboardTiles.displayTitle}
                items={this.props.dashboardTiles._items}
            />
        );
    }

});

export default connect(function(state, props) {
    return {
        dashboardTiles: state.dashboardTiles
    }
})(DashboardTilesContainer);