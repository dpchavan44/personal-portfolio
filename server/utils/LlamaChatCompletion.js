// LlamaChatCompletion.js
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: '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' });

async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      }
    ],
    model: "llama3-8b-8192",
  });
}


module.exports = { getGroqChatCompletion };