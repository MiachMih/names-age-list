import React from "react";
import ReactDOM from "react-dom";
import classes from "./AlertMessage.module.css";

function Overlay(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.triggerDisplay} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          {props.isName ? (
            <p>Name must have length greater than zero</p>
          ) : (
            <p>Age must be greater than zero</p>
          )}
        </div>
        <footer className={classes.actions}>
          <button className="button" onClick={props.triggerDisplay}>
            close
          </button>
        </footer>
      </div>
    </>
  );
}

function AlertMessage(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          isName={props.isName}
          triggerDisplay={props.triggerDisplay}
        />,
        document.getElementById("overlay-root")
      )}
      ;
    </React.Fragment>
  );
}

export default AlertMessage;
