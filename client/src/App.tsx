
import { Button } from '@/components/ui/button';
import { trpc } from '@/utils/trpc';
import { useState, useEffect, useCallback } from 'react';
import type { WebPageResponse } from '../../server/src/schema';

function App() {
  const [pageData, setPageData] = useState<WebPageResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadPage = useCallback(async () => {
    try {
      const result = await trpc.getHelloPage.query();
      setPageData(result);
    } catch (error) {
      console.error('Failed to load page:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Failed to load page</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button 
        className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 text-lg rounded-md shadow-lg"
        onClick={() => {
          // No action - button does nothing when clicked
        }}
      >
        hello
      </Button>
    </div>
  );
}

export default App;
