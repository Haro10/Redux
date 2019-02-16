const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        counter: state.counter + action.val //update counter in state
      }
    case 'SUB':
      return { // just see only counter but it return all state
        ...state,
        counter: state.counter - action.val //update counter in state
      }
    case 'STORE_RESULT':
      return { // just see only counter but it return all state
        ...state,
        results: state.results.concat({
          id: new Date(),
          val: state.counter
        }) //update counter in state
      }
    case 'STORE_DELETE':
      const updatedArray = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: updatedArray
      }
  }
  return state;
};

export default reducer;