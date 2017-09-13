import _ from 'lodash';
import { DISPLAY_POSTS } from '../actions';

export default function(state={}, action){
    switch(action.type){
        case DISPLAY_POSTS:
            //1st argument is data/response and 2nd argument is the unique ID from the respose
            return _.mapKeys(action.payload.data, 'Node');

        default: 
        return state;
    };
}

