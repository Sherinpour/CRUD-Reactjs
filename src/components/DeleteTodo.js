import React from "react";
import { Icon } from "./EditTodoStyle";
import TodosContext from './TodosContext';
import { updateTodos } from "./Utils";

const DeleteTodo = () => {
    const { todos, setTodos } = React.useContext(TodosContext);

    const deleteTodo = (e) => {
        let idOfTodos = e.target.parentElement.parentElement.parentElement.parentElement.id;
        let idOfTodo = e.target.parentElement.parentElement.id;
        setTodos(todos => {
            const copyTodos = {...todos};
            delete copyTodos[idOfTodos][idOfTodo];
            if(Object.keys(todos[idOfTodos]).length == 0){
                delete copyTodos[idOfTodos];
            }
            return copyTodos;  
            });
        updateTodos(todos);
    };

    return(
        <div className="p-2">
            <Icon className="bi bi-journal-x remove-icon" onClick={ e => deleteTodo(e)}>
            </Icon>
        </div>
    );
}

export default DeleteTodo;