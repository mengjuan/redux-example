
import * as actions from './Action'
const initialState = {
    count: 0
  }
  
export default function counterReducer(state = initialState, action){
// console.log('counterReducer',state,action);

switch(action.type) {
    case actions.INCREMENT:
    return {
        count: state.count+1
    };
    case actions.DECREMENT:
        return {
        count: state.count-1
        };
    case actions.RESET:
        return {
        count: 0
        };
    default:
    return state;
    }
}