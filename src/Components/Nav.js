import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

function CurrentDate() {
  const date = new Date();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  // const year = date.getFullYear();
  // console.log(monthIndex+1, day);
  if (monthIndex + 1 === 6 && day === 27) {
    return "Happy Birthday Swetha";
  } else if (monthIndex + 1 === 6 && day <= 26) {
    return "Advance Happy Birthday Swetha";
  } else {
    return "Belated Happy Birthday Swetha";
  }
}
CurrentDate();
function Navbar() {
  return (
    <nav className="navbar">
      <p>Be happy</p>
      <p style={{ color: "purple" }}>{CurrentDate()}</p>
      <Dropdown />
    </nav>
  );
}

function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Songs</button>
      <div className="dropdown-content">
        <a href="#link1">kammani ee prema</a>
        <a href="#link2">Samayama</a>
      </div>
    </div>
  );
}

export default Nav;
