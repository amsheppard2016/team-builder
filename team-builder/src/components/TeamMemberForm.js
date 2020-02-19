import React, { useState } from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const handleChanges = event => {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.role]: event.target.value
        });
        console.log(teamMember);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({ name: "", email: "", role: "Select Role" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="team-member-name">Name: </label>
            <input
                id="team-member-name"
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChanges}
                value={teamMember.name}
            />
            <br />
            <label htmlFor="team-member-email">Email: </label>
            <input
                id="team-member-email"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChanges}
                value={teamMember.email}
            />
            <br />
            <label htmlFor="team-member-role">Role: </label>
            <select
                id="team-member-role"
                name="role"
                placeholder="Choose Role"
                onChange={handleChanges}
                value={teamMember.role}
            >
                <option value="None Choosen">Select Role</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="iOS Engineer">iOS Engineer</option>
                <option value="UX Designer">UX Designer</option>
            </select>
            <br />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default TeamMemberForm;
