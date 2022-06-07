import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsActive, setModalActive] = useState(false); // make modal off by default

  function deleteHandler() {
    console.log("Clicked: " + props.title);
    setModalActive(true);
  }

  function closeModalHandler() {
    console.log("Closing Modal.");
    setModalActive(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsActive ? (
        <Modal
          title={props.title}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      ) : null}
      {modalIsActive ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
