import React from "react";
import TodosContext from './TodosContext';

const DeleteTodo = ({idOfData}) => {
    const { todos, setTodos } = React.useContext(TodosContext);

    const deleteTodo = (e) => {
        let idOfTodo = parseInt(e.target.dataset.id);
        let idOfTodos = Object.keys(todos).find(key => todos[key][idOfTodo]);
        setTodos(todos => {
            const copyTodos = {...todos};
            delete copyTodos[idOfTodos][idOfTodo];
            if(Object.keys(todos[idOfTodos]).length == 0){
                delete copyTodos[idOfTodos];
            }
            return copyTodos;  
            });
    };

    return(
        <div className="p-2">
            <i className="bi bi-journal-x remove-icon" data-id={idOfData} onClick={ e => deleteTodo(e)}>
            </i>
        </div>
    );
}

export default DeleteTodo;