import React from 'react'
import { connect } from 'react-redux'
import { increment,decrement,resetCounter} from './Action'

class Counter extends React.Component {

    increment = () => {
        this.props.increment()
    }

    decrement = () => {
        this.props.decrement()
    }

    resetCounter =()=>{
        this.props.resetCounter()
    }


    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">
                        {this.props.count}
                    </span>
                    <button onClick={this.increment}>+</button>
                </div>
                <button onClick={this.resetCounter}>Reset Counter</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment: () =>{dispatch(increment())},
        decrement: () =>{dispatch(decrement())},
        resetCounter: () =>{dispatch(resetCounter())}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
