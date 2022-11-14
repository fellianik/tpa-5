import { connect } from "react-redux";
import { addTodo } from "../actions";
import "../App.css";

const AddTodo = ({ dispatch }) => {
    let input;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
    };

    return (
        <div className="formInput">
            <form onSubmit={handleSubmit}>
                <input ref={(node) => (input = node)} className="form-input" />
                <button type="submit" className="form-btn">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
