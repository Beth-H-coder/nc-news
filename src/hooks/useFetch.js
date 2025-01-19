// import { useState, useEffect } from "react";
// import axios from "axios";
// //useState -store data we get back from fetch and useEffect - fire code when component that uses hook first evaluates
// export const useFetch = (url, method, payload = {}) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // State 1
//     // API call is in <pending> state
//     setLoading(true);

//     // This is using dyncamic methods
//     // so can be used with GET, POST, DELETE, etc
//     // axios[method](url, payload)
//     //   .then()
//     //   .catch();

//     axios
//       .get(url)
//       .then((data) => {
//         // State 2
//         // API call is in success state
//         setLoading(false);
//         setData(data);
//       })
//       .catch((error) => {
//         // State 3
//         // API call is in error state
//         setLoading(false);
//         setError(true);
//       });
//   }, [url]);

//   return {
//     loading,
//     error,
//     data,
//   };
// };

//using fetch API
// import { useState, useEffect } from "react";

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Network response was not ok.");
//         }
//         const result = await response.json();
//         if (mounted) {
//           setData(result);
//           setLoading(false);
//         }
//       } catch (error) {
//         if (mounted) {
//           setError(error.message || "Failed to fetch data");
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       mounted = false; // Cleanup to prevent state update on unmounted component
//     };
//   }, [url]);

//   return { data, loading, error };
// }

// export default useFetch;

//useFetch axios
import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status >= 200 && response.status < 300) {
          if (mounted) {
            setData(response.data);
            setLoading(false);
          }
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        if (mounted) {
          setError(error.message || "Failed to fetch data");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false; // Cleanup to prevent state update on unmounted component
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
