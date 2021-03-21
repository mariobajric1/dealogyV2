
// No functionality used here just yet. this will save the state of
// user input, for our case the search term. this will get sent to our algo

export const initialState = {
    term: null,
  };
  
  export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionTypes.SET_SEARCH_TERM:
        return {
          ...state,
          term: action.term,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  