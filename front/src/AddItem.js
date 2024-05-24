// import React from "react";
// import { faPlus } from "react-icons/fa";
// type Props = {};

const AddItem = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item0"
        required
      />

      <button type="submit" aria-label="Add Item">
        +{/* <faPlus /> */}
      </button>
    </form>
  );
};

export default AddItem;
