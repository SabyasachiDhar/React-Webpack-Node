export default function(state=[], action){

    switch(action.type){
        case 'REPORT_SELECTED_TOTAL_NODES':
        return action.payload.data;
    }
    return state;
}