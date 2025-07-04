import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todo);
  // This log helps confirm if the component is re-rendering with new data.
  console.log("Rendering ViewTodo with todos:", todos);
  return (
    <>
      <h1>Todo List</h1>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <p>No todos yet. Add one!</p>
      )}
    </>
  );
};

export default ViewTodo;
