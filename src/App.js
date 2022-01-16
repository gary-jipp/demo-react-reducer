import 'App.css';
import { useState } from 'react';

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
      <h2>
        Counter
      </h2>

      <div class="counter">
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
        <button onClick={increment}>+</button>
      </div>
      
      <p>
        The current count is: {count}
      </p>
    </div>
  );
}

export default App;
