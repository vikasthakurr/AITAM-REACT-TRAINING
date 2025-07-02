import React from "react";

const Data = ({ name, age, mobile }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Age:{age}</p>
      <p>Mobile:{mobile}</p>
    </div>
  );
};

export default Data;
