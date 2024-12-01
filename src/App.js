import React from "react";
import Navbar from "./compotents/Navbar/Navbar";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Products from "./compotents/Products/Products";
import Form from "./compotents/Form/Form";

export default function App() {
  const { tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
