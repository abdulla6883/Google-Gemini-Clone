import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
<<<<<<< HEAD
  model: "gemini-3.6-flash",
=======
  model: "gemini-1.5-flash",
>>>>>>> cfa4035e74a119864e9e10ce535155730bab1a4b
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chat = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;