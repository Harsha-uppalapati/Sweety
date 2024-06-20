// App.js

import React, { useState } from "react";
import Nav from "./Components/Nav";
import Celebration from "./Components/Celebration";
import "./App.css";
import data from "./Languages.json";
const App = () => {
  let [language, setLanguage] = useState({
    language: "English",
    happy_birthday: "Happy Birthday",
  });
  let handleBirthday = () => {
    const randomIndex = Math.floor(Math.random() * data.languages.length);
    // console.log(data.languages[randomIndex]);
    setLanguage(data.languages[randomIndex]);
  };
  // handleBirthday();
  return (
    <>
      <Nav />
      <div className="App">
        <div className="other-content">
          {/* Other content beneath the celebration */}
        </div>
        <Celebration />
        <div className="card">
          <p>{language.happy_birthday}</p>
          <img
            src={`${process.env.PUBLIC_URL}/Sweety.jpg`}
            alt="Example"
            onClick={() => handleBirthday()}
          />
          <div className="card-content">
            <h2 className="card-title">Miss noor jahan</h2>
            <p className="card-description">
              Joyful greetings on your birthday, Sammie. It’s time to sing,
              dance, and have some fun!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
