import React from "react";

const TeamMember = props => {
    return (
        <div className="teamMember-list">
            {props.teamMember.map(member => (
                <div className="member" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;
