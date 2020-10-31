import React from 'react'
import { connect } from 'react-redux'
import { fetchPost} from './postAction'

class PostPage extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPost(1))
    }

    renderPosts =()=>{
        console.log("this.props.loading ",this.props.loading)
        if(this.props.loading) return <p>Is loading</p>;
        if(this.props.hasErrors) return <p>Unabel to display met error</p>

        return (<div>
            <h1>{this.props.post.title}</h1>
            <div>
                <span>{this.props.post.body}</span>
            </div>

        </div>)
    }

    render(){
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
        
    }

}

function mapStateToProps(state){
    return {
        post: state.poster.post,
        loading: state.poster.loading,
        hasErrors: state.poster.hasErrors
    }

}

export default connect(mapStateToProps)(PostPage)