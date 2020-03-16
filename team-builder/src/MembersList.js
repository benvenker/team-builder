import React from "react";
import "./MembersList.css";

const MembersList = props => {
  const { members, handleEditClick } = props;
  return members.length > 0 ? (
    <div>
      <h2>Members</h2>
      <table members={members}>
        <tr className="row header">
          <td className="col">Name</td>
          <td className="col">Email</td>
          <td className="col">Role</td>
        </tr>
        {members.map((member, i) => (
          <tr key={i}>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.role} </td>
            <td>
              <span>
                <div
                  className="edit-button"
                  onClick={() => handleEditClick(member)}
                >
                  Edit
                </div>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  ) : (
    <div>
      <br></br>
      Enter some team members to get started...
    </div>
  );
};

export default MembersList;
