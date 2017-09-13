import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsTN extends Component {
    renderDisplayListTN(){
        return this.props.ActiveReportTN.map((ActiveReportTN) =>{
            return(
                <tr key={ActiveReportTN.ID}>
                    <td>{ActiveReportTN.Node}</td>
                    <td>{ActiveReportTN.Count}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportTN);
        const className = `hide ${!!this.props.ActiveReportTN.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h3>Total Nodes</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Node Name</th> 
                                <th>Node Count</th> 
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListTN()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportTN: state.activeReportTN       
    }
}

export default connect(mapStateToProps)(DisplayReportsTN);