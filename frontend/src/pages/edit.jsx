import React, { useEffect, useState } from "react";
import CreateNewForm from "../components/createNewForm";
import { ApiServiceInstance } from "../services/api.services";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/userCard";

const Edit = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     async function go() {
    //         const response = await ApiServiceInstance.axios_get("/api/user");
    //         setUsers(response.data);
    //     }
    //     go()
    // }, [])

    return (
        <div className="container">
            <button onClick={() => navigate('/')} style={{ cursor: "pointer" }}> Back to homepage</button>
            <h1>EDIT PAGE</h1>
            <CreateNewForm />
            <div className="user-grid">
                {users.map(function (user) {
                    return <UserCard key={user._id} name={user.name} quiz={user.sessionData.quiz} techSession={user.sessionData.techSession} nonTechSession={user.sessionData.nonTechSession} photo={user.photo} id={user._id} setUsers={setUsers} />
                })}
            </div>
        </div>
    )
}

export default Edit;