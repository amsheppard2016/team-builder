import React, { useState } from "react";
import TeamMemberForm from "./components/TeamMemberForm";
import TeamMember from "./components/TeamMember";
import "./App.css";

function App() {
    const [teamMember, setTeamMember] = useState([
        {
            id: 1,
            name: "Sally Johnson",
            email: "sallyjohnson@form.com",
            role: "Backend Engineer"
        },
        {
            id: 2,
            name: "Avery Smith",
            email: "averysmith@form.com",
            role: "Frontend Engineer"
        },
        {
            id: 3,
            name: "Bob Franklin",
            email: "bobfranklin@form.com",
            role: "iOS Engineer"
        },
        {
            id: 4,
            name: "Daniel Foster",
            email: "danielfoster@form.com",
            role: "UX Designer"
        }
    ]);
    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role
        };
        setTeamMember([...teamMember, newMember]);
    };

    return (
        <div className="App">
            <h1>TeamMember's</h1>
            <TeamMemberForm addNewMember={addNewMember} />
            <TeamMember teamMember={teamMember} />
        </div>
    );
}

export default App;
