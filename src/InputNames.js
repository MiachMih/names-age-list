import React, { useState } from "react";
import AlertMessage from "./AlertMessage";

function InputNames(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isName, setIsName] = useState(false);

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function ageChangeHandler(e) {
    setAge(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (name.trim().length === 0) {
      setIsDisplay(true);
      setIsName(true);
      return;
    }
    if (age <= 0) {
      setIsDisplay(true);
      return;
    }
    props.addPerson({ id: Math.random(), name: name, age: age });
    setName("");
    setAge(0);
  }

  return (
    <>
      {isDisplay && (
        <AlertMessage
          title={"Alert Message"}
          isName={isName}
          triggerDisplay={() => {
            setIsDisplay(false);
            setIsName(false);
          }}
        />
      )}
      <form className="input" onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" onChange={ageChangeHandler} value={age} />
        </div>
        <button className="button" type="submit">
          Add Person
        </button>
      </form>
    </>
  );
}

export default InputNames;
