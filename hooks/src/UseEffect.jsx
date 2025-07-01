import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 5) {
      console.log("count is 5");
    }
  }, [count]);

  function increse() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <p>this is para demo</p>
      <p>count:{count}</p>
      <button onClick={increse}>Increase</button>
    </div>
  );
};

export default App;
