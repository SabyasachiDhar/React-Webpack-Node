export default function(state = [], action){

    switch(action.type){
        case 'REPORT_SELECTED_VOLUME_INFO':
        return action.payload.data;
    }
    return state;
}