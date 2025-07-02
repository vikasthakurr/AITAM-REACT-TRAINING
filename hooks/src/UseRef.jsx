import React from "react";
import { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  // let value = 0;

  let value = useRef(0);
  let a = useRef();
  console.log(a);
  a.current.style.color = "red";
  a.current.innerText = "AITAM college of engineering and technology";

  // console.log(value)
  const increse = () => {
    value.current = value.current + 1;

    console.log(value.current);
    setCount(count + 1);
  };

  return (
    <div>
      count is :{count}
      <button ref={a} onClick={increse}>
        Increase
      </button>
      <p>this is the demo text in para</p>
    </div>
  );
};

export default UseRef;
