import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import { deleteTodo } from "../actions";
import { useDispatch } from "react-redux";

function TodoList({ todos, toggleTodo }) {
    const dispatch = useDispatch();
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <div style={{ display: "flex" }}>
                        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                        <button className="btn-delete" onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: "10px" }}>
                            x
                        </button>
                    </div>
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
