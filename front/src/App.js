import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";

// A cunstom hook
const useSemiPersistentState = (key, initailState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initailState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

// The main app for the UI
function App() {
  const stories = []; //empty array

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almolds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // setting the state with the new listItems formed
    setItems(listItems);
    // saving our changes
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  // function for deleting the items using their id
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // setting the state with the new listItems formed
    setItems(listItems);
    // saving our changes
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    localStorage.setItem("search", event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // The Search Component
  // const Search = ({ search, onSearch }) => (
  //   <div>
  //     <label htmlFor="search">Search</label>
  //     <input id="search" type="text" value={search} onChange={onSearch} />
  //   </div>
  // );

  // const Search = ({ search, onSearch }) => [
  //   <label key="1" htmlFor="search">
  //     Search: {""}
  //   </label>,

  //   <input
  //     key="2"
  //     id="search"
  //     type="text"
  //     value={search}
  //     onChange={onSearch}
  //   />,
  // ];

  // React Fragment
  const Search = ({ search, onSearch }) => {
    <>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </>;
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem />
      <Content
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />

      {/* Remove the search button afterwards*/}
      <Search handleSearch={handleSearch} searchedStories={searchedStories} />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
