import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />

      <label
        style={item.checked ? { textDecoration: "dashed" } : "none"}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleCheck(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.id}`}
      />
    </li>
  );
};

export default LineItem;
