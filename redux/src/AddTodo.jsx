import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };
  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Enter your Task"
      ></input>
      <button onClick={handleTodo}>Add Task</button>
    </div>
  );
};

export default AddTodo;
