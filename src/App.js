import { useReducer } from "react";
import 'App.css';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CLEAR = "CLEAR";

const countReducer = (state, action) => {
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

function App() {
  const [count, dispatch] = useReducer(countReducer, 0);

  const increment = function() {
    dispatch(INCREMENT);
  };
  const decrement = function() {
    dispatch(DECREMENT);
  };
  const clear = function() {
    dispatch(CLEAR);
  };

  return (
    <div className="App">
      <h1>
        Counters!
      </h1>

      <div class="counter">
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
