import React, { useEffect, useState } from "react";
import TodosContext from './TodosContext';
import { generateId, updateTodos, generateGroupOfTodos, themeSwitcher } from "./Utils";
import AddTodo from "./AddTodo";
import ListOfTodos from "./ListOfTodos";

const App = () => {
    const[todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || {});
    
    const onItemSubmit = (todoValue, checked) => {
        let idOfTodo = generateId();
        let idOfTodos = generateGroupOfTodos(idOfTodo);
                
        if(todoValue === ''){
            return;
        };
        if(todos[idOfTodos]){
            setTodos((todos) => ({
                ...todos,
                [idOfTodos]: {
                  ...todos[idOfTodos],
                  [idOfTodo]: [todoValue, checked],
                },
            }));

        }else{
            setTodos({...todos, [idOfTodos]: {[idOfTodo]: [todoValue, checked]}});
        };
    };   

    useEffect(() => {
        updateTodos(todos);
    }, [todos]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }} >
            <div className="align-self-center">
                <div className="card container">
                    <div className="theme-switcher">
                        <button className="theme_toogle_btn" onClick={e => { themeSwitcher(e) }}>
                            <i className="bi bi-brightness-high"></i>
                        </button>
                    </div>
                    <ListOfTodos />
                </div>
                <AddTodo onItemSubmit={ onItemSubmit } />
            </div>
        </TodosContext.Provider>
    );
};

export default App;
