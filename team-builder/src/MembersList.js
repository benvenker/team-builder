import React from "react";

const MembersList = props => {
  const { members } = props;
  return (
    <div>
      <h1>Members</h1>
      <ul members={members}>
        {members.map(member => (
          <li>
            {member.name}, {member.email}, {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
