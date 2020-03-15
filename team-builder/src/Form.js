import React, { useState, useEffect } from "react";
import MembersList from "./MembersList";
import "./Form.css";

const Form = props => {
  console.log("form props", props);
  const { members, handleMemberEdit, addNewMember, memberToEdit } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onInputChange = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewMember(formData);
    setFormData({ name: "", email: "", role: "" });
  };

  useEffect(() => {
    setFormData(memberToEdit);
    return () => {
      // clean up the thing
    };
  }, [memberToEdit]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
        <button>Add Member</button>
        <MembersList members={members} handleMemberEdit={handleMemberEdit} />
      </form>
    </div>
  );
};

export default Form;
