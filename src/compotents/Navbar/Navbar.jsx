import React from "react";
import Button from "../Button/Button";
import "./Navbar.css"
import { useTelegram } from "../../hooks/useTelegram";


export default function Navbar() {

  const {onClose,user} = useTelegram()


  return (
    <div className="navbar">
      <h3>{user?.username}</h3>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}
