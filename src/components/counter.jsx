import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return counter === 0 ? "empty" : counter;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += counter === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleTagsChange = (id) => {
    //setTags(["tag4", "tag5"]);
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    console.log(id);
  };

  const renderTags = () => {
    return tags.length !== 0
      ? tags.map((tag) => (
          <li
            key={tag}
            className="btn btn-primary btn-sm m-2"
            onClick={() => handleTagsChange(tag)}
          >
            {tag}
          </li>
        ))
      : "No Tags";
  };

  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-warning btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
