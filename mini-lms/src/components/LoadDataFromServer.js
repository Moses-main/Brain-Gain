import { useState, useEffect } from "react";

// USE EFFECT
function LoadDataFromServer() {
  // Create a state variable to hold the data returned from the server
  const [data, setData] = useState("");
  // Create a state variable to maintain loading state
  const [loading, setLoading] = useState(false);

  async function loadData() {
    // Set `loading` to `true` until API call returns a response
    setLoading(true);

    // Imaginary function that performs an API call to load
    // data from a server
    const data = await apiCall();
    setData(data);

    // We have the data, set `loading` to `false`
    setLoading(false);
  }

  // loadData is the function that is run
  // An empty dependency array means this code is run
  // once when the page loads
  useEffect(() => {
    loadData();
  }, []);

  // Display `"Loading..."` while `loading` is `true`,
  // otherwise display `data`
  return <div>{loading ? "Loading..." : data}</div>;
}

async function apiCall() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("ABCDEF"), 5000);
  });
}

export default LoadDataFromServer;