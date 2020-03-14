import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import MembersList from "./MembersList";

function App() {
  const [members, setMember] = useState([]);

  return (
    <div className="App">
      <Form className="form" members={members} />
    </div>
  );
}

export default App;
