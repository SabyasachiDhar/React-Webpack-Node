export default function(state={}, action){

    switch(action.type){
        case 'REPORT_SELECTED_ORPHAN_NODE_COUNT':
        return action.payload.data;
    }
    return state;
}