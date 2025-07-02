import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 1) {
      console.log("component did mount");
    }
    return () => {
      if (count == 5) {
        console.log("component will unmount");
      }
    };
  }, [count]);
  // when dependency array is empty it will execute the function only once i.e loading...
  // user can change the dependency array to execute the function when the dependency changes...

  //useeffect returns a function to do the cleanup  task and that function is known as cleanup function.

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
