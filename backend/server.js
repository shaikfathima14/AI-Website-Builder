const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Website Builder Backend is Running");
});

app.post("/generate", (req, res) => {
  const { prompt } = req.body;

  let response = {};

  if (prompt.toLowerCase().includes("restaurant")) {
    response = {
      title: "Restaurant Website",
      heading: "Delicious Food",
      description: "Fresh food served every day.",
      button: "Book a Table",
    };
  } else if (prompt.toLowerCase().includes("portfolio")) {
    response = {
      title: "Portfolio Website",
      heading: "John Doe",
      description: "Frontend Developer & Designer",
      button: "Contact Me",
    };
  } else {
    response = {
      title: "Business Website",
      heading: prompt,
      description: "AI Generated Website",
      button: "Explore",
    };
  }

  res.json(response);
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});