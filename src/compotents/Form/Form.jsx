import React from "react";
import "./Form.css";

export default function Form() {
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");

  const Login = () => {
    setValueName("");
    setValueEmail("");
    setValuePassword("");
  };
  return (
    <div className="form section">
      <div className="conteiner">
        <input
          className="input"
          type="text"
          placeholder="Name"
          onChange={(e) => setValueName(e.target.value)}
          value={valueName}
        />
        <input
          className="input"
          type="email"
          placeholder="email"
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}
        />
        <input
          className="input"
          type="password"
          placeholder="Name"
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <button className="button" onClick={Login}>
          Send
        </button>
      </div>
    </div>
  );
}
