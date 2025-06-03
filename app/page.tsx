export default function HomePage() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Enigma’s GenAI Playground
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Hi, I’m <strong>Vishal (aka Enigma)</strong> — a cloud engineer exploring the frontiers of Generative AI.
        This space is where I share my experiments, learnings, and tools on topics like <em>RAG</em>, <em>Chain-of-Thought</em>, <em>LLM architecture</em>, and more.
      </p>
      <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>
        Check out the <a href="/about">About</a> and <a href="/skills">Skills</a> pages to learn more about me.
      </p>
    </section>
  );
}
