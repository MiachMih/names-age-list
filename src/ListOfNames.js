import React from "react";
import DisplayNames from "./DisplayNames";

function ListOfNames({ list }) {
  return (
    <ul className="users">
      {list.map((person) => {
        return (
          <DisplayNames key={person.id} name={person.name} age={person.age} />
        );
      })}
    </ul>
  );
}

export default ListOfNames;
