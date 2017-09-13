import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ActiveReportTN from './reducer_active_report_tn';
import ActiveReportTR from './reducer_active_report_tr';
import ActiveReportTRN from './reducer_active_report_trn';
import ActiveReportVI from './reducer_active_report_vi';
import ActiveReportONC from './reducer_active_report_onc';
import ActiveReportNI from './reducer_active_report_ni';
import ActiveReportNURN from './reducer_active_report_nurn';
import ActiveReportNSRN from './reducer_active_report_nurn';
import ActiveReportCADCR from './reducer_active_report_cadcr';

const rootReducer = combineReducers({
  activeReportTN: ActiveReportTN,
  activeReportTR: ActiveReportTR,
  activeReportTRN: ActiveReportTRN,
  activeReportVI: ActiveReportVI,
  activeReportONC: ActiveReportONC,
  activeReportNI: ActiveReportNI,
  activeReportNURN: ActiveReportNURN,
  activeReportNSRN: ActiveReportNSRN,
  activeReportCADCR: ActiveReportCADCR,
  form: formReducer
});

export default rootReducer;
