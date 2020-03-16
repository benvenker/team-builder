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

  const handleMemberEdit = member => {
    // console.log("edit member clicked", member);
    setIsEditing(true);
    console.log("isEditing", isEditing);
    setMemberToEdit(member);
    // console.log("memberToEdit", memberToEdit);
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
    let newMembers;
    if (isEditing) {
      console.log("members", members);

      const index = members.findIndex(member => member.id === formData.id);
      newMembers = [...members]; // important to create a copy, otherwise you'll modify state outside of setState call
      newMembers[index] = formData;
      setMembers(newMembers);
    }
  };

  return (
    <div className="App">
      <Form
        className="form"
        members={members}
        memberToEdit={memberToEdit}
        handleMemberEdit={handleMemberEdit}
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
