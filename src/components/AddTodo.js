import React,{ useState } from "react";

const AddTodo = ({ onItemSubmit }) => {
    const [text, setText] = useState('');
    const[checked, setChecked] = useState(false);
    
    const addItem = () => {
        onItemSubmit(text, checked);
        setText('');
    };

    return (
        <div className="input-group mb-3 input-box">
            <input type="text" id="todoInput" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={text} placeholder="Type Somthing ..." onChange={ e => {setText(e.target.value)} } />
            <span className="input-group-text" id="inputGroup-sizing-default" onClick={() => addItem()}>
                <i className="bi bi-plus-square"></i>
            </span>
        </div>
    );
}

export default AddTodo;