const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Website Builder Backend is Running");
});

app.post("/generate", (req, res) => {

  const {
    prompt,
    theme,
    color,
    template,
    darkMode
  } = req.body;

  let response = {};

  if (template === "Restaurant") {

    response = {
      title: "Restaurant Website",
      heading: "Welcome to Delicious Bites",
      description: "Fresh food crafted with passion.",
      button: "Reserve Table",

      theme,
      color,
      template,
      darkMode,
    };

  }

  else if (template === "Portfolio") {

    response = {
      title: "Portfolio Website",
      heading: "John Doe",
      description: "Creative Full Stack Developer",

      button: "View Projects",

      theme,
      color,
      template,
      darkMode,
    };

  }

  else {

    response = {

      title: "Business Website",

      heading: prompt,

      description: "Professional AI Generated Business Website",

      button: "Learn More",

      theme,
      color,
      template,
      darkMode,
    };

  }

  res.json(response);

});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});