// pages/api/generate.js
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { input } = req.body;
  try {
    const chat = await openai.chat.completions.create({
      messages: [{ role: 'user', content: input }],
      model: 'gpt-3.5-turbo',
    });
    res.status(200).json({ result: chat.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ result: 'Error: ' + err.message });
  }
}