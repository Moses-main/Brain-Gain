import { useState, useEffect } from "react";

function DependentEffect() {
  const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

  const [recommendations, setRecommendations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // If user is not searching for anything, don't show any recomendations
    if (searchText.length === 0) {
      setRecommendations([]);
    }
    // Else, find recommendations
    else if (searchText.length > 0) {
      const newRecs = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecs);
    }
  }, [searchText]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

export default DependentEffect;
