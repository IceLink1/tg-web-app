import React from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

export default function Form() {
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const { tg } = useTelegram();

  const SendData = React.useCallback(() => {
    const data = {
      valueName,
      valueEmail,
      valuePassword,
    }
    tg.sendData(JSON.stringify(data));
  }, [valueName, valueEmail, valuePassword]);
  React.useEffect(() => {
    tg.onEvent("mainButtonClicked", SendData);
    return () => {
      tg.offEvent("mainButtonClicked", SendData);
    };
  }, [SendData]);

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Data",
    });
  }, []);
  React.useEffect(() => {
    if (!valueEmail || !valueName || !valuePassword) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [valueEmail, valueName, valuePassword]);

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
      </div>
    </div>
  );
}
