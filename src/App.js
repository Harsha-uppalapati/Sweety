// App.js

import React, { useState } from "react";

import Celebration from "./Components/Celebration";
import "./App.css";
const App = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <div className="App">
      <div className="other-content">
        {/* Other content beneath the celebration */}
      </div>
      <Celebration />
      <div className="card">
        <img src="https://via.placeholder.com/400x200" alt="Card image" />
        <div className="card-content">
          <h2 className="card-title">Card Title</h2>
          <p className="card-description">
            This is a description of the card. It contains some additional
            information about the content of the card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
