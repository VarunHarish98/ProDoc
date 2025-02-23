import { NextResponse } from 'next/server';
import geminiChat, { fileToGenerativePart } from './extractreportgemini';

/**
 * Extracts the details from the file and sends it to the gemini chat
 * @param {Request} request - The HTTP request object containing the body with the query.
 * @returns - A JSON response with the Gemini chat response or an error message.
 * @throws - An error message if an error occurs.
 */

export async function POST(request: Request) {
    try {
        let { query } = await request.json();
        query = await fileToGenerativePart(query);
        const responseText = await geminiChat(query);
        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error("Error in extractreportgemini API:", error);
        return NextResponse.json(
            { error: 'Error Occurred' },
            { status: 500 }
        );
    }
}
