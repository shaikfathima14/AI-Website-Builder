import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GeneratedWebsite from "./pages/GeneratedWebsite";

function Home({ websitePrompt, setWebsitePrompt }) {
  return (
    <>
      <Navbar />

      <Hero
        websitePrompt={websitePrompt}
        setWebsitePrompt={setWebsitePrompt}
      />

      <Features />

      <Footer />
    </>
  );
}

function App() {
  const [websitePrompt, setWebsitePrompt] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            websitePrompt={websitePrompt}
            setWebsitePrompt={setWebsitePrompt}
          />
        }
      />

      <Route
        path="/generated"
        element={<GeneratedWebsite websitePrompt={websitePrompt} />}
      />
    </Routes>
  );
}

export default App;