import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Login} />
    </Routes>
  );
};

export default App;
