
import { describe, expect, it } from 'bun:test';
import { getHelloPage } from '../handlers/get_hello_page';

describe('getHelloPage', () => {
  it('should return a WebPageResponse with HTML content', async () => {
    const result = await getHelloPage();

    expect(result).toBeDefined();
    expect(result.html).toBeDefined();
    expect(result.contentType).toBeDefined();
    expect(typeof result.html).toBe('string');
    expect(typeof result.contentType).toBe('string');
  });

  it('should return correct content type', async () => {
    const result = await getHelloPage();

    expect(result.contentType).toBe('text/html');
  });

  it('should return valid HTML structure', async () => {
    const result = await getHelloPage();

    // Check for basic HTML structure
    expect(result.html).toContain('<!DOCTYPE html>');
    expect(result.html).toContain('<html lang="en">');
    expect(result.html).toContain('<head>');
    expect(result.html).toContain('</head>');
    expect(result.html).toContain('<body>');
    expect(result.html).toContain('</body>');
    expect(result.html).toContain('</html>');
  });

  it('should contain a button with hello text', async () => {
    const result = await getHelloPage();

    expect(result.html).toContain('<button');
    expect(result.html).toContain('>hello</button>');
  });

  it('should contain red button styling', async () => {
    const result = await getHelloPage();

    // Check for red button styling
    expect(result.html).toContain('background-color: #ff0000');
    expect(result.html).toContain('.hello-button');
  });

  it('should have proper page title', async () => {
    const result = await getHelloPage();

    expect(result.html).toContain('<title>Hello Button Page</title>');
  });

  it('should include responsive viewport meta tag', async () => {
    const result = await getHelloPage();

    expect(result.html).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  });

  it('should include CSS for centering and styling', async () => {
    const result = await getHelloPage();

    // Check for centering CSS
    expect(result.html).toContain('display: flex');
    expect(result.html).toContain('justify-content: center');
    expect(result.html).toContain('align-items: center');
    expect(result.html).toContain('height: 100vh');
  });

  it('should include hover effects for the button', async () => {
    const result = await getHelloPage();

    expect(result.html).toContain('.hello-button:hover');
    expect(result.html).toContain('background-color: #cc0000');
  });
});
