import "./App.css";
// import InputWithLabel from "./components/InputWithLabel";
import "./index.css";
// import { useState, useEffect } from "react";

// const useSemiPersistentState = (key, initialState) => {
//   const [value, setValue] = useState(localStorage.getItem(key) || initialState);

//   useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [value, key]);
//   return [value, setValue];
// };

// const initialStories = [
//   {
//     title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

const App = () => {
  // const [searchTerm, setSearchTerm] = useSemiPersistentState("search");
  // const [stories, setStories] = useState(initialStories);

  // const searchedStories = stories.filter((story) =>
  //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const List = ({ list, onRemoveItem }) =>
  //   list.map((item) => (
  //     <Item
  //       key={item.key}
  //       value={item.value}
  //       item={item}
  //       onRemoveItem={onRemoveItem}
  //     />
  //   ));

  // const Item = ({ item, onRemoveItem }) => {
  //   const handleRemoveItem = () => {
  //     onRemoveItem(item);
  //   };
  // };

  // const handleRemoveStory = (item) => {
  //   const newStories = stories.filter(
  //     (story) => item.objectID !== story.objectID
  //   );

  //   setStories(newStories);
  // };

  return (
    <div className="App">
      <h2>React Asynchronnous Data</h2>
      <hr />
    </div>
  );
};

export default App;
