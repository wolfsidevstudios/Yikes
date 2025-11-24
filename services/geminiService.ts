import { GoogleGenAI } from "@google/genai";

// Initialize the client. API Key is expected to be in environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateViralIdea = async (userPrompt: string): Promise<string> => {
  try {
    const modelId = "gemini-2.5-flash"; // Fast model for interactive responses
    
    // Construct a specific system prompt for the Yikes persona
    const systemInstruction = `You are a creative assistant for a YouTuber named "Yikes" (Xander Keller). 
    His niche involves social media experiments, tricking the internet, AI challenges, and 0-to-100k subscriber speedruns.
    The user will propose a platform or a vague concept.
    Your goal is to generate a specific, click-worthy, viral video title and a brief 1-sentence concept that fits Yikes' style.
    Keep it short, punchy, and modern YouTube style.
    Example Style: "I Tricked the Internet with AI", "I Went Viral on a Dead App".`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.9, // High creativity
      }
    });

    return response.text || "Could not generate an idea at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI is currently overwhelmed with viral ideas. Try again later.";
  }
};