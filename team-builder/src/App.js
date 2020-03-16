import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleEditClick = member => {
    setIsEditing(true);
    console.log("isEditing", isEditing);
    setMemberToEdit(member);
  };

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role,
      id: Date.now()
    };

    setMembers([...members, newMember]);
  };

  const editMember = event => {
    event.preventDefault();
    let newMembers = [...members]; // important to create a copy, otherwise you'll modify state
    if (isEditing) {
      const index = members.findIndex(member => member.id === formData.id);
      newMembers[index] = formData;
      setMembers(newMembers);
      setFormData({ name: "", email: "", role: "" });
    }
  };

  return (
    <div className="App">
      <Form
        className="form"
        members={members}
        memberToEdit={memberToEdit}
        handleEditClick={handleEditClick}
        addNewMember={addNewMember}
        editMember={editMember}
        isEditing={isEditing}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
