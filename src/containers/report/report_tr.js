import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsTR extends Component {
    renderDisplayListTR(){
        return this.props.ActiveReportTR.map((ActiveReportTR) =>{
            return(
                <tr key={ActiveReportTR.ID}>
                    <td>{ActiveReportTR.Relationship}</td>
                    <td>{ActiveReportTR.Count}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props);
        const className = `hide ${!!this.props.ActiveReportTR.length ? 'show' : ''}`;
        return (
            
            <div className={className}>
                <h3>Total Relationship</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Relationship</th> 
                                <th>Node Count</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDisplayListTR()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportTR: state.activeReportTR        
    }
}
export default connect(mapStateToProps)(DisplayReportsTR);