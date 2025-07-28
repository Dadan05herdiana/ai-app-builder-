// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input })
    });
    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI App Builder</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type something..." />
        <button type="submit">Generate</button>
      </form>
      <pre>{output}</pre>
    </main>
  );
}
