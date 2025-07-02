import React from "react";

const Card = (props) => {
  const handleChange = (e) => {
    props.setUserName(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} placeholder="Enter your Name..."></input>
    </div>
  );
};

export default Card;
