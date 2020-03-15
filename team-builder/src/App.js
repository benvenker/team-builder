import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const [members, setMember] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleMemberEdit = member => {
    console.log("edit member clicked", member);
    setMemberToEdit(member);
    console.log("memberToEdit", memberToEdit);
  };

  useEffect(() => {
    // Do a thing
    return () => {
      // clean up the thing
    };
  }, [memberToEdit]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMember([...members, newMember]);
  };

  return (
    <div className="App">
      <Form
        className="form"
        members={members}
        memberToEdit={memberToEdit}
        handleMemberEdit={handleMemberEdit}
        addNewMember={addNewMember}
      />
    </div>
  );
}

export default App;
