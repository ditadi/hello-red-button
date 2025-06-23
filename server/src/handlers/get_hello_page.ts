
import { type WebPageResponse } from '../schema';

export async function getHelloPage(): Promise<WebPageResponse> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is to return HTML content for a simple web page
    // with a single red button displaying "hello" text.
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Button Page</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
            }
            .hello-button {
                background-color: #ff0000;
                color: white;
                border: none;
                padding: 20px 40px;
                font-size: 18px;
                border-radius: 5px;
                cursor: pointer;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .hello-button:hover {
                background-color: #cc0000;
            }
        </style>
    </head>
    <body>
        <button class="hello-button" onclick="">hello</button>
    </body>
    </html>
    `;
    
    return {
        html,
        contentType: 'text/html'
    };
}
