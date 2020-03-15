import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import MembersList from "./MembersList";

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
    // console.log("memberToEdit", memberToEdit);
  };

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
        handleMemberEdit={handleMemberEdit}
        addNewMember={addNewMember}
      />
    </div>
  );
}

export default App;
