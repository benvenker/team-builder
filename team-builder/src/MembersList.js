import React from "react";
import "./MembersList.css";

const MembersList = (props) => {
  const { members, handleEditClick, deleteMember } = props;
  return members.length > 0 ? (
    <div>
      <h2>Members</h2>
      <table members={members}>
        <tbody>
          <tr className="row header">
            <th className="col">Name</th>
            <th className="col">Email</th>
            <th className="col">Role</th>
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
              <td
                className="delete-button"
                onClick={() => deleteMember(member.id)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
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
