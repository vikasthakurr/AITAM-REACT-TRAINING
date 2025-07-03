import React from "react";
import { useState } from "react";
import Child from "./Child";
import { useMemo, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const sum = useCallback(() => {
    console.log("i am a expensive sum function and i am being called");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, []);
  const result = useMemo(sum, []);

  return (
    <div>
      <h1>the sum is: {result}</h1>
      <p>count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child name={name} sum={sum} />
    </div>
  );
};

export default App;
