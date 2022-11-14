import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>To Do List</h1>
            <AddTodo />
            <Footer />
            <VisibleTodoList />
        </div>
    );
}

export default App;
