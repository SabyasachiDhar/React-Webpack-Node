import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsTRN extends Component {
    renderDisplayListTRN(){
        return this.props.ActiveReportTRN.map((ActiveReportTRN) =>{
            return(
                <tr key={ActiveReportTRN.ID}>
                    <td>{ActiveReportTRN.LNode}</td>
                    <td>{ActiveReportTRN.Relationship}</td>
                    <td>{ActiveReportTRN.RNode}</td>
                    <td>{ActiveReportTRN.Count}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportTRN);
        const className = `hide ${!!this.props.ActiveReportTRN.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h3>Total Relationships by Node</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>LNode</th> 
                                <th>Relationship</th> 
                                <th>RNode</th>
                                <th>Count</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListTRN()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportTRN: state.activeReportTRN       
    }
}

export default connect(mapStateToProps)(DisplayReportsTRN);