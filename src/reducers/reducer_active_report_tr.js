export default function(state = [], action){

    switch(action.type){
        case 'REPORT_SELECTED_TOTAL_RELATIONSHIP':
        return action.payload.data;
    }
    return state;
}