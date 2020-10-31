import * as actions from './postAction'

export const initState = {
    loading: true,
    hasErrors: false,
    post: {}
}

export default function postReducer(state=initState, action){
    console.log("postReducer....",state,action)
    switch(action.type){
        case actions.GET_POST:
            return {...state, loading:true}
        case actions.GET_POST_SUCCESS:
            return {post:action.payload, loading:false, hasErrors:false}
        case actions.GET_POST_FAILURE:
            return {...state, loading:false,hasErrors:true}
        default:
            return state
    }
}