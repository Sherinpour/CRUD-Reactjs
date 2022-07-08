import React, { useState } from "react";
import { updateTodos } from "./Utils";

const EditTodo = ({ todo, setTodo, setTodoDisplay }) => {
    
    const [newValue, setNewValue] = useState(todo),
        [editDivClassName, seteditDivClassName] = useState("form-check edit-div"),
        [editIcon, setEditIcon] = useState("block");

    const updateStorage = (id) => {
        let todosId= Object.keys(window.todos);
        todosId.find(
            el => { if(window.todos[el][id]){
                window.todos[el][id][0]= newValue;
            };
        });
        updateTodos(window.todos);
    };

    const editTodo = () => {
        setEditIcon("none");
        setTodoDisplay("none");
        seteditDivClassName("form-check d-flex list-group-item edit-box");
    };

    const saveEditTodo = (e) => {
        let id = e.target.parentElement.parentElement.id;
        updateStorage(id);
        seteditDivClassName("form-check edit-div");
        setEditIcon("block");
        setTodoDisplay("block");
        setTodo(newValue);
    };

    return (
        <>
            <div className= { editDivClassName }>
                <input 
                    type="input" 
                    className="form-control p-2 flex-grow-1" 
                    value={ newValue } 
                    onChange={e => { setNewValue(e.target.value) }} 
                />
                <i className="bi bi-save p-2" onClick={ e => saveEditTodo(e) }></i>
            </div>
            <div className="p-2" style={{ display: editIcon }}>
                <i className="bi bi-pencil edit-icon" onClick={ () => editTodo() }></i>
            </div>
        </>
    );
}

export default EditTodo;