import axios from 'axios';


export const UPLOAD_POSTS = 'UPLOAD_POSTS';
export const REPORT_SELECTED_TOTAL_NODES = 'REPORT_SELECTED_TOTAL_NODES';
export const REPORT_SELECTED_TOTAL_RELATIONSHIP = 'REPORT_SELECTED_TOTAL_RELATIONSHIP';
export const REPORT_SELECTED_TOTAL_RELATIONSHIP_BY_NODE = 'REPORT_SELECTED_TOTAL_RELATIONSHIP_BY_NODE';
export const REPORT_SELECTED_VOLUME_INFO = 'REPORT_SELECTED_VOLUME_INFO';


export const REPORT_SELECTED_ORPHAN_NODE_COUNT = 'REPORT_SELECTED_ORPHAN_NODE_COUNT';
export const REPORT_SELECTED_NODE_INFO = 'REPORT_SELECTED_NODE_INFO';
export const REPORT_SELECTED_NO_USAGE_RELATIONSHIP_NODES = 'REPORT_SELECTED_NO_USAGE_RELATIONSHIP_NODES';
export const REPORT_SELECTED_NO_SCOPE_RELATIONSHIP_NODES = 'REPORT_SELECTED_NO_SCOPE_RELATIONSHIP_NODES';
export const REPORT_SELECTED_CROSS_APPLICATION_DATABASE_CRUD_REPORT = 'REPORT_SELECTED_CROSS_APPLICATION_DATABASE_CRUD_REPORT';

const ROOT_URL = "https://9.109.123.220:8443/display";
const API_KEY = '?key=NEXTGENTOOL2017';


export function selectReportTN(){
    const request = axios.get(`${ROOT_URL}/?report_name=total_nodes`);
    return{
        type: REPORT_SELECTED_TOTAL_NODES,
        payload: request
    }
}

export function selectReportTR(){
    const request = axios.get(`${ROOT_URL}/?report_name=total_relationships`);
    return{
        type: REPORT_SELECTED_TOTAL_RELATIONSHIP,
        payload: request
    }
}

export function selectReportTRN(){
    const request = axios.get(`${ROOT_URL}/?report_name=total_relationships_by_node`);
    return{
        type: REPORT_SELECTED_TOTAL_RELATIONSHIP_BY_NODE,
        payload: request
    }
}

export function selectReportVI(){
    const request = axios.get(`${ROOT_URL}/?report_name=volume_info`);
    return{
        type: REPORT_SELECTED_VOLUME_INFO,
        payload: request
    }
}

export function selectReportONC(){
    const request = axios.get(`${ROOT_URL}/display_1_4${API_KEY}`);
    return{
        type: REPORT_SELECTED_ORPHAN_NODE_COUNT,
        payload: request
    }
}

export function selectReportNI(){
    const request = axios.get(`${ROOT_URL}/display_1_5${API_KEY}`);
    return{
        type: REPORT_SELECTED_NODE_INFO,
        payload: request
    }
}

export function selectReportNURN(){
    const request = axios.get(`${ROOT_URL}/display_2_1${API_KEY}`);
    return{
        type: REPORT_SELECTED_NO_USAGE_RELATIONSHIP_NODES,
        payload: request
    }
}

export function selectReportNSRN(){
    const request = axios.get(`${ROOT_URL}/display_2_2${API_KEY}`);
    return{
        type: REPORT_SELECTED_NO_SCOPE_RELATIONSHIP_NODES,
        payload: request
    }
}

//10. Cross Application Database Crud Report
export function selectReportCADCR(){
    const request = axios.get(`${ROOT_URL}/display_3_7${API_KEY}`);
    return{
        type: REPORT_SELECTED_CROSS_APPLICATION_DATABASE_CRUD_REPORT,
        payload: request
    }
}