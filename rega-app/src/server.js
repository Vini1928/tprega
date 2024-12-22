const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

const serviceAccount = require(path.join(__dirname, 'tprega-4d32c-firebase-adminsdk-1da6v-badf099ebb.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Сервер работает! Попробуйте перейти на /users, чтобы увидеть список пользователей.");
});

app.get("/users", async (req, res) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    console.error("Error getting documents: ", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/users`);
});
