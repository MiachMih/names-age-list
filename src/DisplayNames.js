import React from "react";

function DisplayNames({ name, age }) {
  return (
    <li>
      <h2>{name}</h2>
      <p>{age}</p>
    </li>
  );
}

export default DisplayNames;
