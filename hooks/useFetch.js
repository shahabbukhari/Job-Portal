import { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";
import axios from "axios";

const RAPID_API_KEY = "dc50fac946msh1acbfb9e1dbdf62p118dedjsnbd5c91ca6c70";
const useFetch = (endPoint, query) => {
  const [data, setData] = useState(null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isError, isLoading, refetch };
};

export default useFetch;
