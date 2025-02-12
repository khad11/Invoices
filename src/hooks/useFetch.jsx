import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_KEY;

export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(apiUrl);
      const data = await req.json();
      setData(data);
    };
    fetchData();
  }, [apiUrl]);

  return { data };
};
