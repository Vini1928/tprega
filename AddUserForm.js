import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddUserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    birthDate: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      onUserAdded();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="Имя"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default AddUserForm;
