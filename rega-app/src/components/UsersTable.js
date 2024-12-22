import React, { useEffect, useState } from "react";
import { db } from "../firebase";  // Это теперь больше не нужно
import { collection, onSnapshot } from "firebase/firestore"; // Это теперь больше не нужно

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Сделать запрос на сервер для получения данных
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Дата рождения</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.birthDate}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
