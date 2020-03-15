import React from "react";
import "./MembersList.css";

const MembersList = props => {
  const { members, handleMemberEdit } = props;
  return (
    <div>
      <h1>Members</h1>
      <ul members={members}>
        {members.map(member => (
          <li>
            {member.name}, {member.email}, {member.role}{" "}
            <span>
              <div
                className="edit-button"
                onClick={() => handleMemberEdit(member)}
              >
                Edit
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
