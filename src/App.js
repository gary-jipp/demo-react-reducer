import { useState } from "react";
import 'App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = function() {
    setCount(count + 1);
  };
  const decrement = function() {
    setCount(count - 1);
  };
  const clear = function() {
    setCount(0);
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
