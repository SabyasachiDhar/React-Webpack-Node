export default function(state = [], action){

    switch(action.type){
        case 'REPORT_SELECTED_CROSS_APPLICATION_DATABASE_CRUD_REPORT':
        return action.payload.data;
    }
    return state;
}