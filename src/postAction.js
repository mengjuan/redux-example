export const GET_POST = 'GET_POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () =>({type: GET_POST})

export const getPostSuccess = (post) =>({
    type: GET_POST_SUCCESS,
    payload: post
})

export const getPostFailure = () => ({type: GET_POST_FAILURE})

export function fetchPost(id) {
    return dispatch =>{
        dispatch(getPost())

        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(json =>{
            console.log("dispathc success....")
            dispatch(getPostSuccess(json))
        })
        .catch(error => dispatch(getPostFailure()))
    }
}
