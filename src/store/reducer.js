const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
      case 'INCREMENT':
        return { // just see only counter but it return all state
            ...state,
            counter: state.counter + 1 //update counter in state
        }
      case 'DECREMENT':
        return { // just see only counter but it return all state
             ...state,
            counter: state.counter - 1 //update counter in state
        }
      case 'ADD':
        return { // just see only counter but it return all state
             ...state,
            counter: state.counter + 5 //update counter in state
        }
      case 'SUB':
        return { // just see only counter but it return all state
             ...state,
            counter: state.counter - 5 //update counter in state
        }
      case 'STORE_RESULT':
        return { // just see only counter but it return all state
             ...state,
            results: state.results.concat({
                id: new Date(),
                val: state.counter
            }) //update counter in state
        }
            }
    return state;
};

export default reducer;
