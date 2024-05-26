import { useEffect, useRef } from "react";

const InputWithLabel = ({ id, value, isFocused, onInputChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label for={id}>{children}</label>
      <input
        type="text"
        id={id}
        ref={inputRef}
        autoFocus={isFocused}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default InputWithLabel;
