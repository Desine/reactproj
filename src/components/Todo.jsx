import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { trashOutline, createOutline } from "ionicons/icons";
import axios from "axios";
import Modal from "./Modal";

export default function Todo({ todos, setTodos, todo, setEditTodo, onChange }) {
  const [hover, setHover] = useState(null);

  const [isModelOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  function completeTodo(todo) {
    axios
      .put("http://localhost:8000/todo/" + todo.id, {
        title: todo.title,
        completed: !todo.completed,
      })
      .then(() => onChange())
      .catch((error) => console.log(error));
  }

  function deleteTodo(todo) {
    axios
      .delete("http://localhost:8000/todo/" + todo.id)
      .then(() => onChange())
      .catch((error) => console.error(error));
  }

  return (
    <div
      className="todo"
      onMouseEnter={() => setHover(todo.id)}
      onMouseLeave={() => setHover(null)}
    >
      {isModelOpen && (
        <Modal
          title={modalTitle}
          onConfirm={() => deleteTodo(todo)}
          closeModal={closeModal}
        />
      )}

      <div className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="checkbox"
          onChange={() => completeTodo(todo)}
        />
        <label htmlFor={`check-${todo.id}`}>
          {todo.title.length < 30
            ? todo.title
            : todo.title.slice(0, 30) + "..."}
        </label>
      </div>
      {hover === todo.id ? (
        <div className="buttons">
          <button className="button delete" onClick={() => openModal("Delete a todo?")}>
            <IonIcon icon={trashOutline} size="medium" />
          </button>
          <button className="button edit" onClick={() => setEditTodo(todo)}>
            <IonIcon icon={createOutline} size="medium" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
