import React from 'react';
import {connect} from 'react-redux';
import {
    PageLoader
} from 'modules/app';
import {updateHeader} from 'modules/app/actions/appActions';
import EditDashboardTiles from '../components/editDashboardTiles';
import {
    fetchDashboardTiles,
    updateDashboardTiles
} from '../actions/dashboardTilesActions';

var EditDashboardTilesContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            _hasDataLoaded: false,
            _isSyncing: true,
            _statusCode: null,
            errorMessage: '',
            activeTab: 'edit'
        }
    },

    componentDidMount: function() {
        this.updateHeader();
        this.fetchData();
    },

    fetchData: function() {
        this.setState({
            _isSyncing: true
        })
        
        this.props.fetchDashboardTiles()
        .then((function(response) {
            this.setState({
                _isSyncing: false,
                _hasDataLoaded: true,
                _schema: response.data._schema
            });
            this.updateHeader();
        }).bind(this))
        .catch((function(response) {
            if (response.data.error) {
                this.setState({
                    _hasErrored: true,
                    _statusCode: response.data._statusCode,
                    errorMessage: response.data.message
                })
            }
        }).bind(this))
    },

    updateHeader: function() {
        return this.props.updateHeader({
            breadcrumbs: [
                {
                    text: 'Dashboard Tiles'
                }
            ]
        });
    },

    onUpdateField: function(model) {
        return this.props.updateDashboardTiles(model);
    },

    onTabChanged: function(value) {
        this.setState({
            activeTab: value
        });
    },

    render: function() {
        return (
            <PageLoader 
                hasLoaded={this.state._hasDataLoaded} 
                hasErrored={this.state._hasErrored}
                statusCode={this.state._statusCode}
                errorMessage={this.state.errorMessage}
                text="Loading"
                >
                <EditDashboardTiles
                    dashboardTiles={this.props.dashboardTiles}
                    schema={this.state._schema}
                    onUpdateField={this.onUpdateField}
                />
            </PageLoader>
        );
    }

});

export default connect(function(state, props) {
    return {
        dashboardTiles: state.dashboardTiles
    }
}, {
    updateHeader,
    fetchDashboardTiles,
    updateDashboardTiles
})(EditDashboardTilesContainer);
