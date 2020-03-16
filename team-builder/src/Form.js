import React, { useEffect } from "react";
import MembersList from "./MembersList";
import "./Form.css";

const Form = props => {
  const {
    members,
    handleEditClick,
    addNewMember,
    memberToEdit,
    editMember,
    isEditing,
    formData,
    setFormData
  } = props;

  const onInputChange = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    console.log("handleSubmit called");
    event.preventDefault();
    addNewMember(formData);
    setFormData({ name: "", email: "", role: "" });
  };

  // Populate the form with the member to edit
  useEffect(() => {
    setFormData(memberToEdit);
  }, [memberToEdit]);

  return (
    <div className="form-container">
      <form onSubmit={!isEditing ? handleSubmit : editMember}>
        <label htmlFor="name">
          Name:
          <input
            onChange={onInputChange}
            value={formData.name}
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={onInputChange}
            value={formData.email}
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="role">
          Role:
          <input
            onChange={onInputChange}
            value={formData.role}
            type="text"
            name="role"
          />
        </label>
        <button>
          {memberToEdit.name !== "" ? "Update Member" : "Add Member"}
        </button>
      </form>
      <MembersList
        members={members}
        edidtMember={editMember}
        handleEditClick={handleEditClick}
      />
    </div>
  );
};

export default Form;
