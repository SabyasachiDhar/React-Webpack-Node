import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReportTN, selectReportTR, selectReportTRN, selectReportVI, selectReportONC, selectReportNI, selectReportNURN, selectReportNSRN, selectReportCADCR } from '../actions/index';
import { bindActionCreators } from 'redux';
import DisplayReportsTN from './report/report_tn';
import DisplayReportsTR from './report/report_tr';
import DisplayReportsTRN from './report/report_trn';
import DisplayReportsVI from './report/report_vi';
import DisplayReportsONC from './report/report_onc';
import DisplayReportsNI from './report/report_ni';
import DisplayReportsNURN from './report/report_nurn';
import DisplayReportsNSRN from './report/report_nsrn';
import DisplayReportsCADCR from './report/report_cadcr';

class DisplayReportList extends Component {

    constructor(){
        super();
        this.state = {render:''}
    }
    handleClickTN(compName, e){
        // console.log(compName);
        this.setState({render:compName});  
        this.props.selectReportTN();
    }
    handleClickTR(compName, e){
        // console.log(compName);
        this.setState({render:compName});    
        this.props.selectReportTR();
    }

    handleClickTRN(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportTRN(); 
    }
    handleClickVI(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportVI(); 
    }
    handleClickONC(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportONC(); 
    }
    handleClickNI(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportNI(); 
    }
    handleClickNURN(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportNURN(); 
    }
    handleClickNSRN(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportNSRN(); 
    }
    handleClickCADCR(compName, e){
        // console.log(compName);
        this.setState({render:compName}); 
        this.props.selectReportCADCR(); 
    }

    _renderSubComp(){
        switch(this.state.render){
            case 'DisplayReportsTN': return <DisplayReportsTN />
            case 'DisplayReportsTR' : return <DisplayReportsTR />
            case 'DisplayReportsTRN' : return <DisplayReportsTRN />
            case 'DisplayReportsVI' : return <DisplayReportsVI />
            case 'DisplayReportsONC' : return <DisplayReportsONC />
            case 'DisplayReportsNI' : return <DisplayReportsNI />
            case 'DisplayReportsNURN' : return <DisplayReportsNURN />
            case 'DisplayReportsNSRN' : return <DisplayReportsNSRN />
            case 'DisplayReportsCADCR' : return <DisplayReportsCADCR />
        }
    }
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-sm-3">

                        <h3>Menu Items</h3>
                        <ul className="list-group">

                            <a className="list-group-item" href="javascript:void(0)">Tutorials and Learning Resources</a>
                            <a className="list-group-item" href="javascript:void(0)">Solutioning</a>
                            <a className="list-group-item" href="javascript:void(0)">Plug in Development</a>
                            <a className="list-group-item active" href="/app">Discovery Toolset</a>
                            <a className="list-group-item" href="javascript:void(0)">Migration Fastpath</a>
                            <a className="list-group-item" href="javascript:void(0)">FAQ</a>
                        </ul>
                        <h3>Report List</h3>
                        <ul className="list-group">
                            <a className="list-group-item" onClick={this.handleClickTN.bind(this, 'DisplayReportsTN')} href="javascript:void(0)">Total Nodes</a>
                            <a className="list-group-item" onClick={this.handleClickTR.bind(this, 'DisplayReportsTR')} href="javascript:void(0)">Total Relationships</a>
                            <a className="list-group-item" onClick={this.handleClickTRN.bind(this, 'DisplayReportsTRN')} href="javascript:void(0)">Total Relationships by Node</a>
                            <a className="list-group-item" onClick={this.handleClickVI.bind(this, 'DisplayReportsVI')} href="javascript:void(0)">Volume Info</a>
                            {/*<li className="list-group-item"><a onClick={this.handleClickONC.bind(this, 'DisplayReportsONC')} href="javascript:void(0)">Orphan Node Count</a></li>
                            <li className="list-group-item"><a onClick={this.handleClickNI.bind(this, 'DisplayReportsNI')} href="javascript:void(0)">Node Info</a></li>
                            <li className="list-group-item"><a onClick={this.handleClickNURN.bind(this, 'DisplayReportsNURN')} href="javascript:void(0)">No Usage Relationship Nodes</a></li>
                            <li className="list-group-item"><a onClick={this.handleClickNSRN.bind(this, 'DisplayReportsNSRN')} href="javascript:void(0)">No Scope Relationship Nodes</a></li>
                            <li className="list-group-item"><a onClick={this.handleClickCADCR.bind(this, 'DisplayReportsCADCR')} href="javascript:void(0)">Cross Application Database Crud Report</a></li>*/}
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        {this._renderSubComp()}
                    </div>
                </div>
             </div>
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectReportTN, selectReportTR, selectReportTRN,selectReportVI, selectReportONC, selectReportNI, selectReportNURN, selectReportNSRN, selectReportCADCR}, dispatch);
};
export default connect(null, mapDispatchToProps)(DisplayReportList);