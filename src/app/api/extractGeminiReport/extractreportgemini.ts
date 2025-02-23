const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY 
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const prompt = `I will upload a file which is in base 64 format, read the contents of the file and generate a report. Go over the clinical 
                report and identify any biomarkers that show slight or large abnormalities. Make sure to include numerical values and key details from the report, 
                make sure you follow these constraints
                1. Do not include the PII, PCI, or any insurance related information
                2. Do not include any sensitive information
                3. Only include the medical information
                4. I dont want any extra symbols or characters like \n or \t in the report, just the plain text
                and give it to me as a Summary in paragraph under 
                REPORT SUMMARY :`


const geminiChat = async (query: any) => {
    const generatedContent = await model.generateContent([prompt, query]);
    return generatedContent.response?.text();
}

export const fileToGenerativePart = async (imageData: string) => {
    return {
        inlineData: {
            data: imageData.split(",")[1],
            mimeType: imageData.substring(imageData.indexOf(":") + 1, imageData.indexOf(";"))
        }
    }
}

export default geminiChat;  
