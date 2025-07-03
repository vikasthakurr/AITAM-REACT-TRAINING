import React from "react";

const Child = React.memo((props) => {
  console.log("I am child component");
  return <div>this is child component :{props.name}</div>;
});

export default Child;
