import React, { Component } from 'react';
import{ connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    render () {
        console.log('results: ', this.props.results)
        return (
            
            <div>
                < CounterOutput value = { this.props.ctr } />
                < CounterControl label = "Increment"
                clicked = { this.props.onIncrementCounter }
                />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />

                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.results.map(result => (
                    < li onClick = {
                      () => this.props.onDeleteResult(result.id)
                    }
                    key = {
                        result.id
                    } >
                        {result.val}
                    </li>)) }
                </ul>
            </div>
        );
    }
}


//Ctr = props.Ctr
// mapStateToProps= map store's state to prop of the component
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    }
}

//dispatch to trigger action
//mapDispatchToProps = map redux's actions to props of the component
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val:5 }),
        onSubCounter: () => dispatch({
            type: actionTypes.SUB,
            val: 5
        }),
        onStoreResult: (res) => dispatch({
            type: actionTypes.ADD_RESULT,
            res: res
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            id: id
        })
    }
}

//Map mapStateToProps  and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Counter);