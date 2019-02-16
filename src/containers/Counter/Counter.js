import React, { Component } from 'react';
import{ connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                < CounterOutput value = { this.props.ctr } />
                < CounterControl label = "Increment"
                clicked = { this.props.onIncrementCounter }
                />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />

                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    { this.props.results.map(result => (
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
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    }
}

//dispatch to trigger action
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', val:5 }),
        onSubCounter: () => dispatch({
            type: 'SUB',
            val: 5
        }),
        onStoreResult: () => dispatch({
            type: 'STORE_RESULT',
        }),
        onDeleteResult: (id) => dispatch({
            type: 'STORE_DELETE',
            id: id
        })
    }
}

//Map mapStateToProps  and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Counter);