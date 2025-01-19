import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import Todos from "./components/todos/Todos.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/todos" Component={Todos} />
    </Routes>
  );
};

export default App;
