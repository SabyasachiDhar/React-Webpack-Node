import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsONC extends Component {
    renderDisplayListONC(){
        return this.props.ActiveReportONC.map((ActiveReportONC) =>{
            return(
                <tr key={ActiveReportONC.Module.Node}>
                    <td>Data Not Found</td>
                    <td>Data Not Found</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportONC);
        const className = `hide ${!!this.props.ActiveReportONC.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h2>Total Nodes</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Module Node</th> 
                                <th>Dataset Node</th> 
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListONC()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportONC: state.activeReportONC       
    }
}

export default connect(mapStateToProps)(DisplayReportsONC);