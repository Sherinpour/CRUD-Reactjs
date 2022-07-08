import React, { useState } from "react";
import { getTodos, updateTodos } from "./Utils";

const CheckBox = ({ check, setCheck }) => {
    
    const updateStorage = (todoId) => {
        let todos = getTodos();
        let todosId= Object.keys(todos);
        todosId.find(
            el => { if(todos[el][todoId]){
                if(check){
                    todos[el][todoId][1]= false;
                }else{
                    todos[el][todoId][1]= true;
                };
            };
        });
        updateTodos(todos);
    };

    const handleChange = e => {
        setCheck(!check);
        const todoId = e.target.parentElement.parentElement.id;
        updateStorage(todoId);

    };

    const rendercheckBox = () => {
        if(check){
            return (
               <input type="checkbox" className="form-check-input" onChange={ e => { handleChange(e) }} checked />
            );
        };
        return (
            <input type="checkbox" className="form-check-input" onChange={ e => { handleChange(e) }} />
        );
    };

    return (
        <>
            { rendercheckBox() }
        </>
    );
};

export default CheckBox;