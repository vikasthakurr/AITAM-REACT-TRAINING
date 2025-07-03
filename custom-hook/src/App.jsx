import React from "react";
import Custom from "./Custom";

const App = () => {
  const [data] = Custom("https://jsonplaceholder.typicode.com/users");
  console.log(data);
  return (
    <div>
      {data && 
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
