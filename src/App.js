import "./styles.css";

import { useState, useEffect } from "react";

export default function App() {
  // let isActive = false;

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  useEffect(() => {
    console.log(`Der Zustand von isActive ist jetzt: ${isActive}`);
  });

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deaktivieren" : "Aktivieren"}
      </button>{" "}
    </main>
  );
}

//Bonus Task in Zeile 24
//Hacker Bonus Task in Zeile 16-18
