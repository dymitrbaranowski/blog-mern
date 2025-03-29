import express from "express";

import mongoose from "mongoose";

import { registerValidation } from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";

mongoose
  .connect("mongodb+srv://admin:wwwwww@cluster0.43lrtqn.mongodb.net/blog")

  .then(() => console.log("DB is OK"))
  .catch((err) => console.log("DB error", err));

const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export the app for testing purposes
