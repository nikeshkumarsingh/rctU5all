import { useState } from "react";


export const Addtext = (props) => {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, num);
    setText("");
    setNum("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setText(e.target.value)}
        className="name"
      />
      <input
        type="text"
        placeholder="Enter Number"
        onChange={(e) => setNum(e.target.value)}
        className="phone"
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
