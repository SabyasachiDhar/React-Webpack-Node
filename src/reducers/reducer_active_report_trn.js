export default function(state = [], action){

    switch(action.type){
        case 'REPORT_SELECTED_TOTAL_RELATIONSHIP_BY_NODE':
        return action.payload.data;
    }
    return state;
}