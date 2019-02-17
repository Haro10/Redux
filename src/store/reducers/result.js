import * as actionTypes from '../actions'

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RESULT:
            return { // just see only counter but it return all state
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    val: action.res
                }) //update counter in state
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.id);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default resultReducer;