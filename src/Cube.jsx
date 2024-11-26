import React, { useState } from 'react';
import './Cube.css';
import Face1 from './Face1';
import Face2 from './Face2';
import Face3 from './Face3';
import Face4 from './Face4';
import Face5 from './Face5';
import Face6 from './Face6';

const Cube = ({ details }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.5, // Adjust sensitivity
      y: prev.y + deltaX * 0.5,
    }));

    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="scene"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      <div
        className="cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="face front">
          <Face1 details={details.face1} />
        </div>
        <div className="face back">
          <Face2 details={details.face2} />
        </div>
        <div className="face right">
          <Face3 details={details.face3} />
        </div>
        <div className="face left">
          <Face4 details={details.face4} />
        </div>
        <div className="face top">
          <Face5 details={details.face5} />
        </div>
        <div className="face bottom">
          <Face6 details={details.face6} />
        </div>
      </div>
    </div>
  );
};

export default Cube;
