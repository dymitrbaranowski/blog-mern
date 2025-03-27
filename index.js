import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  if (req.body.emal === "test@test.ru") {
    const token = jwt.sign(
      {
        email: req.body.email,
        fullName: "Вася Пупкин",
      },

      "secret123"
    );
  }

  res.json({
    success: true,
    token,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export the app for testing purposes
