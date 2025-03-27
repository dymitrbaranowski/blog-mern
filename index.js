import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://admin:wwwwww@cluster0.43lrtqn.mongodb.net/")
  .then(() => console.log("DB is OK"))
  .catch(() => console.log("DB error", err));

const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.json());

app.post("/auth/register", (req, res) => {
  req;
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export the app for testing purposes
