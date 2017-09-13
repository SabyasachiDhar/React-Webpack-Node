import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsVI extends Component {
    renderDisplayListVI(){
        return this.props.ActiveReportVI.map((ActiveReportVI) =>{
            return(
                <tr key={ActiveReportVI.ID}>
                    <td>{ActiveReportVI.HOST_NAME}</td>
                    <td>{ActiveReportVI.OPERATING_SYSTEM}</td>
                    <td>{ActiveReportVI.MOUNT_POINT}</td>
                    <td>{ActiveReportVI.VOLUME}</td>
                    <td>{ActiveReportVI.FILE_SYSTEM}</td>
                    <td>{ActiveReportVI.DEVICE_TYPE}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportVI);
        const className = `hide ${!!this.props.ActiveReportVI.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h3>Volume Info</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Host Name</th> 
                                <th>Operating System</th> 
                                <th>Mount Point</th>
                                <th>Volume</th>
                                <th>File System</th>
                                <th>Device Type</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListVI()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportVI: state.activeReportVI       
    }
}

export default connect(mapStateToProps)(DisplayReportsVI);