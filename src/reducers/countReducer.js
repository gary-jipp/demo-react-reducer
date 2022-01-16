const countReducer = (state, action) => {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const CLEAR = "CLEAR";

  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};

export default countReducer;