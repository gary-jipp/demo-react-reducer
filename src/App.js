import { useReducer } from "react";
import Counter from "components/Counter";
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

  return (
    <div className="App">
      <h1>
        Counters!
      </h1>
      <Counter count={count} dispatch={dispatch} />
    </div>
  );
}

export default App;
