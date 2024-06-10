import { useEffect } from "react";
import { useState } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return {
    data,
    isLoading,
    error
  };
}

export default useApi;
