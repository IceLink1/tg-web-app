import React from "react";
import "./Navbar.css";
import { useTelegram } from "../../hooks/useTelegram";

export default function Navbar() {
  const { onClose, user } = useTelegram();

  return (
    <div className="navbar">
      <h3>{user?.username}</h3>
      <button className="button" onClick={onClose}>Close</button>
    </div>
  );
}
