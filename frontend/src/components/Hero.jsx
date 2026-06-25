import { useState } from "react";
import "../styles/hero.css";

function Hero({ setWebsitePrompt }) {
  const [prompt, setPrompt] = useState("");

  const generateWebsite = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const data = await response.json();

      console.log("Backend Response:", data);

      setWebsitePrompt(data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
  };

  return (
    <section className="hero">
      <h1>AI-Powered Dynamic Website Builder 🚀 Version 2</h1>

      <p>
        Create beautiful websites using Artificial Intelligence and deploy
        automatically with Jenkins and Docker.
      </p>

      <input
        type="text"
        placeholder="Restaurant Website"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />

      <button onClick={generateWebsite}>
        🚀 Generate Website
      </button>
    </section>
  );
}

export default Hero;