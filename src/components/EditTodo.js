import React, { useState } from "react";
import { Icon } from "./EditTodoStyle";
import TodosContext from "./TodosContext";
import { updateTodos } from "./Utils";

const EditTodo = ({ todo, setTodo, setTodoDisplay, idOfData}) => {
    
    const [newValue, setNewValue] = useState(todo),
        [editDivClassName, seteditDivClassName] = useState("form-check edit-div"),
        [editIcon, setEditIcon] = useState("block");

    const { todos, setTodos } = React.useContext(TodosContext);

    const updateStorage = (id) => {
        let todosId= Object.keys(todos);
        todosId.find(
            idOfTodos => {
                let arrOfTodo = todos[idOfTodos][id];
                arrOfTodo[0] = newValue;
                setTodos((todos) => ({
                    ...todos,
                    [idOfTodos]: {
                      ...todos[idOfTodos],
                      [id]: arrOfTodo,
                    },
                }));
            }
        );
        updateTodos(todos);
    };

    const editTodo = () => {
        setEditIcon("none");
        setTodoDisplay("none");
        seteditDivClassName("form-check d-flex list-group-item edit-box");
    };

    const saveEditTodo = (e) => {
        let id = parseInt(e.target.dataset.id);
        setTodo(newValue);
        updateStorage(id);
        seteditDivClassName("form-check edit-div");
        setEditIcon("block");
        setTodoDisplay("block");
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
                <Icon className="bi bi-save p-2" data-id={idOfData} onClick={ e => saveEditTodo(e) }></Icon>
            </div>
            <div className="p-2" style={{ display: editIcon }}>
                <Icon className="bi bi-pencil edit-icon" onClick={ () => editTodo() }></Icon>
            </div>
        </>
    );
}

export default EditTodo;