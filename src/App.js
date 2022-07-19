import ListOfNames from "./ListOfNames";
import InputNames from "./InputNames";
import { useState } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  function addPerson(person) {
    setList((prevState) => {
      return [
        ...prevState,
        { id: person.id, name: person.name, age: person.age },
      ];
    });
  }
  return (
    <div>
      <InputNames addPerson={addPerson} />
      <ListOfNames list={list} />
    </div>
  );
}

export default App;
