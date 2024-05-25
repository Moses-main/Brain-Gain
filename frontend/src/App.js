import "./App.css";
import InputWithLabel from "./components/InputWithLabel";
import "./index.css";
import { useState } from "react";
// import { React, useState } from "react";
// import Search from "./Search";
// import ListModule from "./List";
// import Footer from "./components/Footer";
// import InputWithLabel from "./components/InputWithLabel";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("react");

  // const searchedStories = stories.filter((story) =>
  //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const Search = ({ search, onSearch }) => {
  //   // const { search, onSearch } = props;

  //   return (
  //     <div>
  //       <label htmlFor="search">Search: </label>
  //       <input id="search" value={search} type="text" onChange={onSearch} />
  //     </div>
  //   );
  // };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const List = ({ list }) =>
  //   list.map((item) => <Item key={item.key} value={item.value} />);

  // const Item = ({ item: { title, url, author, num_comments, points } }) => (
  //   <div>
  //     <span>
  //       <a href={url}>{title}</a>
  //     </span>
  //     <span>{author}</span>
  //     <span>{num_comments}</span>
  //     <span>{points}</span>
  //   </div>
  // );

  // const user = {
  //   id: "1",
  //   firstName: "Robin",
  //   lastName: "Wieruch",
  //   country: "Germany",
  //   city: "Berlin",
  // };
  // const { id, country, city, ...otherAttributes } = user;
  // console.log(otherAttributes);

  return (
    <div className="App">
      {/* <h3>My Hacker Stories</h3>
      <div>
        <hr />

        <br />

        <Search search={searchTerm} onSearch={handleSearch} />
        <br />
      </div>
      <hr />
      <ListModule list={searchedStories} />
      <hr />
      <InputWithLabel />
      <hr />
      <Footer List={List} /> */}
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        // value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search: </strong>
      </InputWithLabel>
      <p>{searchTerm}</p>
    </div>
  );
};

export default App;
