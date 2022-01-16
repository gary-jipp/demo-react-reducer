const Counter = function(props) {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const CLEAR = "CLEAR";

  const increment = function() {
    props.dispatch({ type: INCREMENT, value: 2 });
  };
  const decrement = function() {
    props.dispatch({ type: DECREMENT, value: 4 });
  };
  const clear = function() {
    props.dispatch({ type: CLEAR });
  };

  return (
    <div class="counter">
      <span>{props.count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
