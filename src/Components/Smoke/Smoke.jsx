import React, { useState, useEffect } from "react";
import "./Smoke.css";

const SmokeAnimation = () => {
  const [smokeElements, setSmokeElements] = useState([]);

  useEffect(() => {
    // Генерация случайных полосок дыма
    const generateSmoke = () => {
      const newSmokeElement = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random(),
      };

      setSmokeElements((prevSmokeElements) => [
        ...prevSmokeElements,
        newSmokeElement,
      ]);

      setTimeout(() => {
        setSmokeElements((prevSmokeElements) =>
          prevSmokeElements.filter(
            (element) => element.id !== newSmokeElement.id
          )
        );
      }, 2000);
    };

    const smokeInterval = setInterval(generateSmoke, 500);

    return () => {
      clearInterval(smokeInterval);
    };
  }, []);

  return (
    <div className="smoke-container">
      {smokeElements.map((element) => (
        <div
          key={element.id}
          className="smoke-element"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SmokeAnimation;
