import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayReportsNURN extends Component {
    renderDisplayListNURN(){
        return this.props.ActiveReportNURN.map((ActiveReportNURN) =>{
            return(
                <tr key={ActiveReportNURN.Id}>
                    <td>{ActiveReportNURN.Node}</td>
                    <td>{ActiveReportNURN.Name}</td>
                    <td>{ActiveReportNURN.Id}</td>
                    <td>{ActiveReportNURN.SourceReference}</td>
                </tr>
            );
        });
    }

    render() {
        //console.log(this.props.ActiveReportNURN);
        const className = `hide ${!!this.props.ActiveReportNURN.length ? 'show' : ''}`;
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
                            {this.renderDisplayListNURN()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ActiveReportNURN: state.activeReportNURN       
    }
}

export default connect(mapStateToProps)(DisplayReportsNURN);