import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsNSRN extends Component {
    renderDisplayListNSRN(){
        return this.props.ActiveReportNSRN.map((ActiveReportNSRN) =>{
            return(
                <tr key={ActiveReportNSRN.Id}>
                    <td>{ActiveReportNSRN.Id}</td>
                    <td>{ActiveReportNSRN.Node}</td>
                    <td>{ActiveReportNSRN.Name}</td>
                    <td>{ActiveReportNSRN.SourceReference}</td>
                    <td>{ActiveReportNSRN.Description}</td>
                    <td>{ActiveReportNSRN.AppName}</td>
                </tr>
            );
        });
    }

    render() {
        console.log(this.props.ActiveReportNSRN);
        const className = `hide ${!!this.props.ActiveReportNSRN.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h2>Node Info</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Id</th>
                                <th>Node</th> 
                                <th>Name</th> 
                                <th>SourceReference</th>
                                <th>Description</th>
                                <th>AppName</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListNSRN()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportNSRN: state.activeReportNSRN       
    }
}

export default connect(mapStateToProps)(DisplayReportsNSRN);