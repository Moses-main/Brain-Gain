const InputWithLabel = ({ id, value, onInputChange, children }) => {
  return (
    <div>
      <label for={id}>{children}</label>
      {/* <p>&nbsp;</p> */}
      <input type="text" id={id} value={value} onChange={onInputChange} />
    </div>
  );
};

export default InputWithLabel;
