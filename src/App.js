import { useState } from "react";
import 'App.css';
import Counter from "components/Counter";

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
        Counter (component)
      </h2>

      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        clear={clear} />
        
      <p>
        The current count is: {count}
      </p>
    </div>
  );
}

export default App;
