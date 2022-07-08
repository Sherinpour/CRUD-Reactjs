import React from "react";
import { getTodos, updateTodos } from "./Utils";

const DeleteTodo = () => {
    
    const deleteTodo = (e) => {
        let todoId = e.target.parentElement.parentElement.parentElement.parentElement.id;
        let div = document.getElementById(e.target.parentElement.parentElement.id);

        div.parentNode.removeChild(div);
        delete window.todos[todoId][e.target.parentElement.parentElement.id];

        if(Object.keys(window.todos[todoId]).length == 0){
            delete window.todos[todoId]
            let div = document.getElementById(todoId);
            div.parentNode.removeChild(div);
        }
        updateTodos(window.todos);
    };

    return(
        <div className="p-2">
            <i className="bi bi-journal-x remove-icon" onClick={ e => deleteTodo(e)}>
            </i>
        </div>
    );
}

export default DeleteTodo;