import React from 'react';
import {connect} from 'react-redux';
import DashboardTiles from '../components/dashboardTiles';

var DashboardTilesContainer = React.createClass({

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