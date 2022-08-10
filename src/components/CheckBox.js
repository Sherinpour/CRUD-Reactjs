import React from "react";
import TodosContext from './TodosContext';

const CheckBox = ({ check, setCheck }) => {
    const { todos, setTodos } = React.useContext(TodosContext);
    
    const updateStorage = (todoId) => {
        let todosId= Object.keys(todos);
        todosId.find(
            idOfTodos => {
                let arrOfTodo = todos[idOfTodos][todoId];
                check ? arrOfTodo[1] = false : arrOfTodo[1] = true;
                setTodos((todos) => ({
                    ...todos,
                    [idOfTodos]: {
                      ...todos[idOfTodos],
                      [todoId]: arrOfTodo,
                    },
                }));
            }
        );
    };

    const handleChange = e => {
        setCheck(!check);
        const todoId = e.target.parentElement.parentElement.id;
        updateStorage(todoId);
    };

    return (
        <>
            <input type="checkbox" className="form-check-input" onChange={ e => { handleChange(e) }} checked={check} />
        </>
    );
};

export default CheckBox;