import React, { useMemo, useState } from "react";
import { onLogout } from "../../../api/AuthAPI";
import "./index.scss";

export default function ProfilePopup() {
    return (
        <div className="popup-card">
            <u1 className="popup-options">
                <li className="popup-options" onClick={onLogout}>
                </li>
            </u1>
        </div>
    );
}