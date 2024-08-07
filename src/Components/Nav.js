import React, { useEffect, useRef, useState } from "react";
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

  if (monthIndex + 1 === 6 && day === 27) {
    return "Happy Birthday Swetha";
  } else if (monthIndex + 1 === 6 && day <= 26) {
    return "Advance Happy Birthday Swetha";
  } else {
    return "Belated Happy Birthday Swetha";
  }
}

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
  const [selectedSong, setSelectedSong] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleCanPlayThrough = () => {
        console.log("Audio is ready to play");
      };
      const handlePlay = () => {
        console.log("Audio started playing");
      };
      const handleError = error => {
        console.error("Audio playback error:", error);
      };

      audioElement.addEventListener("canplaythrough", handleCanPlayThrough);
      audioElement.addEventListener("play", handlePlay);
      audioElement.addEventListener("error", handleError);

      if (selectedSong) {
        audioElement.load(); // Load the new source
        audioElement.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }

      return () => {
        audioElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
        audioElement.removeEventListener("play", handlePlay);
        audioElement.removeEventListener("error", handleError);
      };
    }
  }, [selectedSong]);

  const handleSongClick = event => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedSong(event.target.innerText);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Songs</button>
      <div className="dropdown-content">
        <a href="#link1" onClick={handleSongClick}>
          kammani ee prema
        </a>
        <a href="#link2" onClick={handleSongClick}>
          Samayama
        </a>
      </div>
      {/* sons */}
      <audio ref={audioRef} style={{ display: "none" }}>
        <source
          src={
            selectedSong === "kammani ee prema"
              ? `${process.env.PUBLIC_URL}/Kammani Ee Premalekhani.mp3`
              : selectedSong === "Samayama"
              ? `${process.env.PUBLIC_URL}/samayama.mp3`
              : ""
          }
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Nav;
