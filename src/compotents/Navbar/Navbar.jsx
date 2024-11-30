import React from "react";
import Button from "../Button/Button";
import "./Navbar.css"

const tg = window.Telegram.WebApp;

export default function Navbar() {
  const username = "dwadawd";
  const Close = () => {
    tg.close();
  };
  return (
    <div className="navbar">
      <h3>{tg.initDataUnsafe?.user?.username}</h3>
      <Button onClick={Close}>Close</Button>
    </div>
  );
}
