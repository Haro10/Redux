const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return { // just see only counter but it return all state
        counter: state.counter + 1 //update counter in state
        }
    }
    if (action.type === 'DECREMENT') {
        return { // just see only counter but it return all state
        counter: state.counter - 1 //update counter in state
        }
    }
    if(action.type === 'ADD'){
        return { // just see only counter but it return all state
        counter: state.counter + 5 //update counter in state
        }
    }
    if(action.type === 'SUB'){
        return { // just see only counter but it return all state
        counter: state.counter - 5 //update counter in state
        }
    }
    return state;
};

export default reducer;
