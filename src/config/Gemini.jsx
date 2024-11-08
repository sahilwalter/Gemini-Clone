//npm install @google/generative-ai


import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = "AIzaSyDVYl_Wa9pHf2Ol1HFdYSBofw_To8Xhd3s";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    
    console.log(result.response.text());
    return response.text();
  }
  
  export default run;