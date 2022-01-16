const Counter = function(props) {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const CLEAR = "CLEAR";

  const increment = function() {
    props.dispatch(INCREMENT);
  };
  const decrement = function() {
    props.dispatch(DECREMENT);
  };
  const clear = function() {
    props.dispatch(CLEAR);
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
