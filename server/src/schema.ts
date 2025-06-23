
import { z } from 'zod';

// Simple schema for the web page response
export const webPageResponseSchema = z.object({
  html: z.string(),
  contentType: z.string()
});

export type WebPageResponse = z.infer<typeof webPageResponseSchema>;
