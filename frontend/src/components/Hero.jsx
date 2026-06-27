import { useState } from "react";
import "../styles/hero.css";
import ConfigModal from "./ConfigModal";
import Loading from "./Loading";

function Hero({ setWebsitePrompt }) {
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateWebsite = async (config) => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:5000/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
            theme: config.theme,
            color: config.color,
            template: config.template,
            darkMode: config.darkMode,
          }),
        });

        const data = await response.json();

        console.log("Backend Response:", data);

        setWebsitePrompt(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        alert("Backend connection failed.");
      }
    }, 2000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="hero">
        <h1>AI-Powered Dynamic Website Builder</h1>

        <p>
          Create beautiful websites using Artificial Intelligence and deploy
          automatically with Jenkins and Docker.
        </p>

        <input
          type="text"
          placeholder="Enter website idea (Restaurant, Portfolio, Hospital...)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <br />

        <button onClick={() => setShowModal(true)}>
          🚀 Generate Website
        </button>
      </section>

      <ConfigModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onGenerate={(config) => {
          setShowModal(false);
          generateWebsite(config);
        }}
      />
    </>
  );
}

export default Hero;