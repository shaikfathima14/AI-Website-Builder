function GeneratedWebsite({ websitePrompt }) {

  if (!websitePrompt) return null;

  return (
    <div
      style={{
        width: "90%",
        margin: "40px auto",
        background: "#1e293b",
        color: "white",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h1>{websitePrompt.title}</h1>

      <h2>{websitePrompt.heading}</h2>

      <p>{websitePrompt.description}</p>

      <button>{websitePrompt.button}</button>
    </div>
  );
}

export default GeneratedWebsite;
