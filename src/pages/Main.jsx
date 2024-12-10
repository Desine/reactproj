import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => load(), []);

  function load() {
    axios
      .get("http://127.0.0.1:8000/todo")
      .then((response) => {
        setTodos(response.data);
        setAllTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="box">
        <Header />
        <Form
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          onChange={load}
          allTodos={allTodos}
        />
        <Todos
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          todosArray={todos}
          onChange={load}
        />
        <Footer todos={allTodos} />
      </div>
    </div>
  );
}
