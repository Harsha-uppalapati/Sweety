// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

import Celebration from "./Components/Celebration";
import "./App.css";
import data from "./Languages.json";
const App = () => {
  let [language, setLanguage] = useState({
    language: "English",
    happy_birthday: "Happy Birthday",
  });
  const [hasSeven, setHasSeven] = useState(false);
  let handleBirthday = () => {
    const randomIndex = Math.floor(Math.random() * data.languages.length);
    // console.log(data.languages[randomIndex]);
    setLanguage(data.languages[randomIndex]);
  };
  useEffect(() => {
    function checkTime() {
      const now = new Date();

      let hours24 = now.getHours(); // Get hours in 24-hour format
      const minutes = now.getMinutes().toString().padStart(2, "0");

      // Convert hours to 12-hour format
      let hours12 = hours24 % 12;
      hours12 = hours12 === 0 ? 12 : hours12; // Handle midnight (0) as 12 in 12-hour format
      // Determine if it's AM or PM

      // Check if '7' is present in hours or minutes
      if (
        hours24.toString().includes("7") ||
        minutes.includes("7") ||
        hours12.toString().includes("7")
      ) {
        setHasSeven(true);
      } else {
        setHasSeven(false);
      }
    }

    // Check time initially when the component mounts
    checkTime();

    // Set an interval to check the time every 30 seconds (30000 milliseconds)
    const interval = setInterval(checkTime, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  console.log(hasSeven);
  // handleBirthday();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Home"
            element={
              <div className="App">
                <div className="other-content">
                  {/* Other content beneath the celebration */}
                </div>
                <Celebration />
                <div className="card">
                  <p>{language.happy_birthday}</p>
                  <p style={hasSeven ? { display: "" } : { display: "none" }}>
                    Thala for a reason
                  </p>
                  <img
                    src={`${process.env.PUBLIC_URL}/Sweety.jpg`}
                    alt="Example"
                    onClick={() => handleBirthday()}
                  />
                  <div className="card-content">
                    <h2 className="card-title">Miss noor jahan</h2>
                    <p className="card-description">
                      Joyful greetings on your birthday, Sammie. It’s time to
                      sing, dance, and have some fun!
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
