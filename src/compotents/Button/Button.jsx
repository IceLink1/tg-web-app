import React from "react";
import "./Button.css";

export default function Button({ props, children }) {
  return (
    <button {...props} className={"button "}>
      {children}
    </button>
  );
}