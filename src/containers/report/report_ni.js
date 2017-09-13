import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsNI extends Component {
    renderDisplayListNI(){
        return this.props.ActiveReportNI.map((ActiveReportNI) =>{
            return(
                <tr key={ActiveReportNI.Id}>
                    <td>{ActiveReportNI.Node}</td>
                    <td>{ActiveReportNI.Name}</td>
                    <td>{ActiveReportNI.Id}</td>
                    <td>{ActiveReportNI.SourceReference}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportNI);
        const className = `hide ${!!this.props.ActiveReportNI.length ? 'show' : ''}`;
        return (
            <div className={className}>
                <h2>Node Info</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead> 
                            <tr> 
                                <th>Node</th> 
                                <th>Name</th> 
                                <th>Id</th> 
                                <th>SourceReference</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.renderDisplayListNI()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportNI: state.activeReportNI       
    }
}

export default connect(mapStateToProps)(DisplayReportsNI);