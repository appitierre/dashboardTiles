import React from 'react';
import createReactClass from 'create-react-class';
import LP from 'modules/app/helpers/lp';
import {Form} from 'modules/form';

var EditDashboardTiles = createReactClass({

    render: function() {
        return (
            <div className="edit-dashboard-tiles">
                <Form
                    model={this.props.dashboardTiles}
                    schema={this.props.schema}
                    onUpdate={this.props.onUpdateField}
                    form={{actions:this.props.formActions}}
                    title={"Edit Dashboard Tiles"}
                />
            </div>
        );
    }

});

export default EditDashboardTiles;