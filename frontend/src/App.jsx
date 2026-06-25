import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GeneratedWebsite from "./pages/GeneratedWebsite";

function App() {
  const [websitePrompt, setWebsitePrompt] = useState(null);

  return (
    <>
      <Navbar />

      <Hero
        websitePrompt={websitePrompt}
        setWebsitePrompt={setWebsitePrompt}
      />

      <Features />

      <GeneratedWebsite
        websitePrompt={websitePrompt}
      />

      <Footer />
    </>
  );
}

export default App;