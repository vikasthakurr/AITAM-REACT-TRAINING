import React from "react";
import Child from "./Child";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();
const App = () => {
  const data = {
    name: "Likith",
    age: 24,
    salary: 50000,
  };
  return (
    <dataContext.Provider value={data}>
      <div>
        <Child />
      </div>
    </dataContext.Provider>
  );
};

export default App;
