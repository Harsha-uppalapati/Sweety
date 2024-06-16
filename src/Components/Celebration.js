// Celebration.js

import React, {  useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Celebration.css"; // Import the CSS file for styling

const COLORS = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const Celebration = ({ isVisible }) => {
  const [papers, setPapers] = useState([]);

  const handleClick = () => {
    const paperCount = 150; // Number of papers to fall

    // Generate papers with animation properties
    const newPapers = Array.from({ length: paperCount }, (_, index) => {
      const key = `paper-${index}`;
      const color = COLORS[index % COLORS.length]; // Cycle through colors
      const delay = Math.random() * 1000;

      return <Paper key={key} color={color} delay={delay} />;
    });

    // Add new papers to the state
    setPapers(prevPapers => [...prevPapers, ...newPapers]);
  };

  return (
    <div>
      <button className="buttonStart" onClick={handleClick}>
        ColourPop
      </button>

      <div className="papers-container">{papers}</div>
    </div>
  );
};

// Paper component using react-spring for animation
const Paper = ({ color, delay }) => {
  const animationProps = useSpring({
    from: {
      opacity: 1,
      transform: `translate(-50%, -50%) rotate(${
        Math.random() * 360
      }deg) scale(1)`,
      position: "absolute",
      left: "50%",
      top: "50%",
    },
    to: {
      opacity: 0,
      transform: `translate(-50%, -50%) rotate(${
        Math.random() * 360
      }deg) scale(0.2)`,
      position: "absolute",
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
    },
    config: { tension: 150, friction: 10, duration: 2000 },
    delay,
  });

  return (
    <animated.div
      className="paper"
      style={{ ...animationProps, backgroundColor: color }}
    ></animated.div>
  );
};

export default Celebration;
