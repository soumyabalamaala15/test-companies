import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/details" replace />} />
      <Route path="/details" element={<Form />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
