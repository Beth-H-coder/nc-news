import { useState, useEffect } from "react";
import axios from "axios";
//useState -store data we get back from fetch and useEffect - fire code when component that uses hook first evaluates
export const useFetch = (url, method, payload = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // State 1
    // API call is in <pending> state
    setLoading(true);

    // This is using dyncamic methods
    // so can be used with GET, POST, DELETE, etc
    // axios[method](url, payload)
    //   .then()
    //   .catch();

    axios
      .get(url)
      .then((data) => {
        // State 2
        // API call is in success state
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        // State 3
        // API call is in error state
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};
