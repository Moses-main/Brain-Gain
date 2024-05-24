// import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  //   const [items, setItems] = useState([
  //     {
  //       id: 1,
  //       checked: false,
  //       item: "One half pound bag of Cocoa Covered Almolds Unsalted",
  //     },
  //     {
  //       id: 2,
  //       checked: false,
  //       item: "Item 2",
  //     },
  //     {
  //       id: 3,
  //       checked: false,
  //       item: "Item 3",
  //     },
  //   ]);

  // const handleCheck = (id) => {
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   // setting the state with the new listItems formed
  //   setItems(listItems);
  //   // saving our changes
  //   localStorage.setItem("shoppingList", JSON.stringify(listItems));
  // };

  // // function for deleting the items using their id
  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   // setting the state with the new listItems formed
  //   setItems(listItems);
  //   // saving our changes
  //   localStorage.setItem("shoppingList", JSON.stringify(listItems));
  // };

  return (
    <main>
      {/* Tenary operator checking for the length of the list items */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabindex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        // Displaying information when the list is empty
        <p style={{ mergingTop: "2rem" }}>Your Item list items Empty </p>
      )}
    </main>
  );
};

export default Content;
