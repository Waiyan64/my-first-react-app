import "./App.css";
import React from "react";
import Form from "./Form";

function App() {
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text"/>
    </form>
  );
}

export default App;