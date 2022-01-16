import { useReducer } from "react";
import Counter from "components/Counter";
import countReducer from "reducers/countReducer";
import 'App.css';

function App() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <h2>
        Counter (payload)
      </h2>

      <Counter count={count} dispatch={dispatch} />

      <p>
        The current count is: {count}
      </p>
      
    </div>
  );
}

export default App;
