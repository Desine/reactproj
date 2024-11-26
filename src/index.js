import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./static/style.css";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Main />);
root.render(<Main />);





// let request = fetch("https://jsonplaceholder.typicode.com/todos",{
// method: 'POST',
// headers:{
// 'Content-Type': 'application/json'
// },
// body: JSON.stringify({
// title: "New todo",
// completed: false,
// userId: 1
// })
// });
// request
// .then((response) => response.json())
// .then((data) => console.log(data)
// .catch((e) => console.log(e)));
