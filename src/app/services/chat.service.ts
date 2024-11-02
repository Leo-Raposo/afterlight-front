import axios from 'axios';

// Define the base URL and any required headers
const API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3';
const API_TOKEN = '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';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

export const sendChatMessage = async (messages: { sender: string; content: string }[]) => {
    try {

        const MessageContent = messages.map(message => message.content).join('\n');

        const response = await axiosInstance.post('', {
            inputs: MessageContent,
        });

        const generatedText = response.data?.[0]?.generated_text || '';

        return generatedText;
    } catch (error) {
        console.error('Error sending message to Hugging Face chat API:', error);
        throw error;
    }
};

// Define a new base URL for the exercise API
const EXERCISE_API_URL = 'https://44roy2.buildship.run/api/exercises';

// Novo método para fazer requisição ao endpoint do exercício
export const executeGetExerciseInstruction = async (language: string, name: string) => {
    try {
        const response = await axios.get(EXERCISE_API_URL + "/" + language + "/" + name);
        return response.data;
    } catch (error) {
        console.error('Error executing exercise request:', error);
        throw error;
    }
};