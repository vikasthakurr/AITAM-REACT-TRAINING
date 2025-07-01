import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default UseState;
