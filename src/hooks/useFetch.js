import { useState, useEffect } from 'react';

/**
 *
 * const {} = useFetch(url, { method: 'POST',headers: { Accept: 'application/json'} })
 */

export const useFetch = (initialUrl, initialOptions) => {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    setLoading(true);
    setError(undefined);

    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller });
        const result = await response.json();

        if (mounted) {
          setData(result);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
      mounted = false;
    };
  }, [url, options]);

  return { data, error, loading, setUrl, setOptions };
};
