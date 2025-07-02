import React from "react";
import Card from "./Card";
import { useState } from "react";
import Card2 from "./Card2";

const App = () => {
  const [username, setUserName] = useState("");
  return (
    <div>
      <Card username={username} setUserName={setUserName} />
      <p>
        this is the value in the parent component that is received by child :
        {username}
      </p>
      <Card2 username = {username} />
    </div>
  );
};

export default App;
