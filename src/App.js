import React from "react";
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [value, setValue] = useState(0);
  useConsoleLog(value);
  const increment = () => {
    setValue(prevValue => prevValue + 1)
  }
  
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={increment}>Increment</button>
    </div>
 
  )

}




export default App;