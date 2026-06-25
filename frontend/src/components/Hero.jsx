import { useState } from "react";
import "../styles/hero.css";
import ConfigModal from "./ConfigModal";
import Loading from "./Loading";

function Hero({ setWebsitePrompt }) {
  const [showModal, setShowModal] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

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
      <h1>AI-Powered Dynamic Website Builder 🚀</h1>
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

      <button onClick={() => setShowModal(true)}>
        🚀 Generate Website
      </button>

      <ConfigModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onGenerate={
          () => {
            setShowModal(false);
            generateWebsite();
          }
        }
      />
    </section>
  );
}

export default Hero;