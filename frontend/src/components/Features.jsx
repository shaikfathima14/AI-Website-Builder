import "../styles/features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Our Platform?</h2>

      <div className="feature-container">
        <div className="card">
          <h3>🤖 AI Powered</h3>
          <p>Generate websites from simple text prompts.</p>
        </div>

        <div className="card">
          <h3>⚛ React Frontend</h3>
          <p>Modern and responsive user interface.</p>
        </div>

        <div className="card">
          <h3>🐳 Docker</h3>
          <p>Containerized deployment for consistency.</p>
        </div>

        <div className="card">
          <h3>🚀 Jenkins CI/CD</h3>
          <p>Automatic build and deployment after every GitHub push.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;