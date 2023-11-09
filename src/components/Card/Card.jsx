// Card.jsx
import React from "react";
import "./Card.css";

export default function Card({ name, image }) {
  return (
    <div className="cardMain">
      <div className="cardUp">
        <span className="characterName">{name}</span>
      </div>
      <div className="cardDown">
        <div className="downLeft">
          <img src={image} alt={name} className="characterImage" />
        </div>
      </div>
    </div>
  );
}
