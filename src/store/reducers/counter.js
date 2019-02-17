import * as actionTypes from '../actions'

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { // just see only counter but it return all state
                ...state,
                counter: state.counter + 1 //update counter in state
            }
        case actionTypes.DECREMENT:
            return { // just see only counter but it return all state
                ...state,
                counter: state.counter - 1 //update counter in state
            }
        case actionTypes.ADD:
            return { // just see only counter but it return all state
                ...state,
                counter: state.counter + action.val //update counter in state
            }
        case actionTypes.SUB:
            return { // just see only counter but it return all state
                ...state,
                counter: state.counter - action.val //update counter in state
            }
    }
    return state;
};

export default counterReducer;