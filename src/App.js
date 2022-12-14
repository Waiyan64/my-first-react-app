import "./App.css";
import { useState, useEffect } from "react";

const MousePosition = ({render}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMousePositiononChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener("mousemove", handleMousePositiononChange);
      
    return () => {
      window.removeEventListener("mousemove", handleMousePositiononChange);
      };
  }, []);
    
  return render({mousePosition});
};


const PanelMouseLogger = () => {
  
  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="Row">
        <MousePosition 
        render={({mousePosition}) => <p>{mousePosition.x}</p>}
        />
        <MousePosition 
        render={({mousePosition}) => <p>{mousePosition.y}</p>}
        />
      </div>
    </div>
  );
};

const PointMouseLogger = () => {

  return (
    <p>
      <MousePosition 
      render ={({mousePosition}) =><p>{mousePosition.x}, {mousePosition.y}</p>}
      />
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
};

export default App;
