import React from "react";
import "./index.scss"

export default function ProfileCard({ currentUser }) {
    return (
        <div className="profile-card">
            <h3 className="userName">{currentUser.name}</h3>
            <p className="userEmail">{currentUser.email}</p>
        </div>
    );
}