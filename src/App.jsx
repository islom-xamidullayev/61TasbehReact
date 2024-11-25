import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const resetCounter = () => setCount(0);

  return (
    <div className="wrapper">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}


export default App;
