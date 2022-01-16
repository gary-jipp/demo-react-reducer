import { useReducer } from "react";
import Counter from "components/Counter";
import countReducer from "reducers/countReducer";
import 'App.css';

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
