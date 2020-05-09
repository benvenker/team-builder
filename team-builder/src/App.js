import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleEditClick = (member) => {
    setIsEditing(true);
    setMemberToEdit(member);
  };

  // Populate the form with the member to edit
  useEffect(() => {
    setFormData(memberToEdit);
  }, [memberToEdit]);

  // useEffect(() => {}, [members]);

  const addNewMember = (member) => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role,
      id: Date.now(),
    };

    setMembers([...members, newMember]);
  };

  const editMember = (event) => {
    event.preventDefault();
    let newMembers = [...members]; // important to create a copy, otherwise you'll modify state
    if (isEditing) {
      const index = members.findIndex((member) => member.id === formData.id);
      newMembers[index] = formData;
      setMembers(newMembers);
      setFormData({ name: "", email: "", role: "" });
      setMemberToEdit({ name: "", email: "", role: "" });
    }
    setIsEditing(false);
  };

  const deleteMember = (id) => {
    console.log("clicked delete!");
    console.log("delete id: ", id);

    return setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="App">
      <h1>Team Member Entry Form</h1>
      <Form
        className="form"
        members={members}
        memberToEdit={memberToEdit}
        handleEditClick={handleEditClick}
        addNewMember={addNewMember}
        editMember={editMember}
        deleteMember={deleteMember}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
