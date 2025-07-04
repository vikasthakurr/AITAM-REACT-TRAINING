import React from "react";
import { useContext } from "react";
import { dataContext } from "./App";

const Child3 = () => {
  const data = useContext(dataContext);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>this is child 3</p>
    </div>
  );
};

export default Child3;
