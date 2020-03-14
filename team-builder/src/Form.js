import React, { useState } from "react";
import MembersList from "./MembersList";

const Form = props => {
  const { members } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onInputChange = event => {
    console.log(event.target.value);
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    members.push(formData);
    setFormData({ name: "", email: "", role: "" });
  };

  return (
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
      <MembersList members={members} />
    </form>
  );
};

export default Form;
