import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UsersTable from "./components/UsersTable";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleUserAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Добавить пользователя</h2>
        <AddUserForm onUserAdded={handleUserAdded} />
      </div>
      <div className="table-container">
        <h2>Список пользователей</h2>
        <UsersTable key={refresh} />
      </div>
    </div>
  );
};

export default App;
