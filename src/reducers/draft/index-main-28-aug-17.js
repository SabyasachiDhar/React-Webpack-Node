import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DisplayReducerReportList from './reducer_report_list';
import ActiveReport from './reducer_active_report';

const rootReducer = combineReducers({
  ReportLists : DisplayReducerReportList,
  activeReport: ActiveReport,
  form: formReducer
});

export default rootReducer;
