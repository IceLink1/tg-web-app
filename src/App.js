import React from "react";
import Navbar from "./compotents/Navbar/Navbar";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Button from "./compotents/Button/Button";

export default function App() {
  const { tg, onToggle } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Navbar />
      <button className="button" onClick={onToggle}>Toggle</button>
    </div>
  );
}
