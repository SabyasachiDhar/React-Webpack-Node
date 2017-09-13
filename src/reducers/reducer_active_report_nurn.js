export default function(state = [], action){

    switch(action.type){
        case 'REPORT_SELECTED_NO_USAGE_RELATIONSHIP_NODES':
        return action.payload.data;
    }
    return state;
}