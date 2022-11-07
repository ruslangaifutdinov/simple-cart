import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Component = () => {
  return <h1>Hello world</h1>;
};

root.render(<Component />);
