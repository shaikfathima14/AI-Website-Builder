import { useState } from "react";
import "../styles/configModal.css";

function ConfigModal({ isOpen, onClose, onGenerate }) {
  const [theme, setTheme] = useState("Modern");
  const [color, setColor] = useState("Blue");
  const [template, setTemplate] = useState("Business");
  const [darkMode, setDarkMode] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    onGenerate({
      theme,
      color,
      template,
      darkMode,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>🤖 AI Website Configuration</h2>

        <label>Theme</label>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option>Modern</option>
          <option>Minimal</option>
          <option>Luxury</option>
        </select>

        <label>Primary Color</label>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option>Blue</option>
          <option>Purple</option>
          <option>Green</option>
          <option>Black</option>
        </select>

        <label>Template</label>

        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option>Business</option>
          <option>Restaurant</option>
          <option>Portfolio</option>
        </select>

        <div className="checkbox">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

          <span>Enable Dark Mode</span>
        </div>

        <div className="buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="generate-btn"
            onClick={handleGenerate}
          >
            🚀 Generate
          </button>

        </div>

      </div>
    </div>
  );
}

export default ConfigModal;