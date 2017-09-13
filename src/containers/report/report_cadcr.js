import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsCADCR extends Component {
    renderDisplayListCADCR(){
        return this.props.ActiveReportCADCR.map((ActiveReportCADCR) =>{
            return(
                <tr key={ActiveReportCADCR.Message}>
                    <td>{ActiveReportCADCR.Message}</td>
                </tr>
            );
        });
    }

    render() {
        console.log(this.props.ActiveReportCADCR);
        const className = `hide ${!!this.props.ActiveReportCADCR.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h2>Cross Application Database Crud Report</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Message</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListCADCR()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportCADCR: state.activeReportCADCR       
    }
}

export default connect(mapStateToProps)(DisplayReportsCADCR);