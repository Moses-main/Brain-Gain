import { useState, useEffect } from "react";

const useSemiPersistentState = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);
  return [searchTerm, setSearchTerm];
};

const Search = () => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState();
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h2>My Hacker Stories</h2>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />
    </div>
  );
};

export default Search;
