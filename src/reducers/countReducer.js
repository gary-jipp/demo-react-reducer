const countReducer = (state, action) => {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const CLEAR = "CLEAR";

  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};

export default countReducer;