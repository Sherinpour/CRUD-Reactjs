import React, { useEffect, useState  } from "react";
import { generateId, updateTodos, generateGroupOfTodos, themeSwitcher } from "./Utils";
import AddTodo from "./AddTodo";
import ListOfTodos from "./ListOfTodos";

const App = () => {
    const[newItem , setNewItem] = useState({value: '', id: null});
    
    const onItemSubmit = (todoValue, checked) => {
        let idOfTodo = generateId();
        let objOfDateOfTodo = window.todos[generateGroupOfTodos(idOfTodo)];
        
        if(todoValue === ''){
            return;
        };
        if(objOfDateOfTodo){
            objOfDateOfTodo[idOfTodo] = [todoValue, checked];
        }else{
            window.todos[generateGroupOfTodos(idOfTodo)] = {};
            window.todos[generateGroupOfTodos(idOfTodo)][idOfTodo] = [todoValue, checked];
        }

        setNewItem({value: todoValue, id: idOfTodo});
    };   

    useEffect(() => {
        updateTodos(window.todos);
    }, [newItem]);

    return (
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
    );
};

export default App;
