// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div style={Styles.container}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)} style={Styles.button}>
//         Increment
//       </button>
//       <button onClick={() => setCount(count - 1)} style={Styles.button}>
//         Decrement
//       </button>
//       <button onClick={() => setCount(0)} style={Styles.resetbutton}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;

// const Styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//   },
//   button: {
//     padding: "10px 20px",
//     margin: "10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   resetbutton: {
//     padding: "10px 20px",
//     margin: "10px",
//     backgroundColor: "#f44336",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };



// conditional rendering in react js
import React, { useState } from "react";

const App = () => {
  const [isLoggined, setIsLoggined] = useState(false);

  const toggleLogin = () => {
    setIsLoggined((prevState) => !prevState);
  };

  let message;

  if (isLoggined) {
    message = <h1>Welcome Back, Vikas</h1>;
  } else {
    message = <h1>Please Login</h1>;
  }

  return (
  <div>
  {message}
  <p>{isLoggined ? "you are logined into website" : "you are logged out"}</p>
  <button onClick={toggleLogin}>
    {isLoggined ? "Logout" : "Login"}
  </button>
  </div>
  
);
  
};

export default App;
