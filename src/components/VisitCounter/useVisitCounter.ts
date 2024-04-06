import { useCallback, useEffect, useState } from 'react';

import { getVisitsCount } from '@/backend/visit';

export const useVisitCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCount = useCallback(async () => {
    try {
      const data = await getVisitsCount();

      setCount(data);
    } catch (error) {
      setError('Błąd pobierania...');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCount();

    const interval = setInterval(() => {
      fetchCount();
    }, 10000);

    return () => clearInterval(interval);
  }, [fetchCount]);

  return { count, loading, error };
};
