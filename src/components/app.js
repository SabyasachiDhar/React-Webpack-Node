import React, { Component } from 'react';

import DisplayReportList from '../containers/container_display_report_list';
import UploadFileComp from './upload_file/upload_file';
import UploadFilesSCMD from './upload_file/upload_scmd_files';

export default class App extends Component {
  render() {
    return (
      <div className="clearfix">
        <header className="loginHeader">
            <h2>Discovery Tool</h2>
        </header>
        <div className="reportWrap">
          <div className="uploadFiles">
            <div className="clearfix">
              <div className="col-sm-6 col-sm-offset-3">
                <UploadFileComp />
              </div>
            </div>
          </div>
          
          <DisplayReportList />
        </div>
      </div>
    );
  }
}