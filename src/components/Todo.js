import React from "react";
import PropTypes from "prop-types";

function Todo({ onClick, completed, text, deleteTodo }) {
    return (
        <>
            <li
                className="list"
                onClick={onClick}
                style={{
                    textDecoration: completed ? "line-through" : "none",
                    marginBottom: "10px",
                }}
            >
                {text}
            </li>
        </>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;
