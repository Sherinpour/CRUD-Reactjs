import React, { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import CheckBox from "./CheckBox";

const TodoDetails = ({ item, checked }) => {
    const[todo, setTodo] = useState(item),
    [check, setCheck] = useState(checked),
    [todoDisplay, setTodoDisplay] = useState("block");

    if(todo === ''){
        return;
    }

    return (
        <>
            <div className="p-2 flex-grow-1 form-check todo" id={ todo } style={{ display: todoDisplay }}>
                <CheckBox check={ check } setCheck={ setCheck } /> 
                <label className="form-check-label" htmlFor="flexCheckDefault">{ todo }</label>
            </div>
            <EditTodo todo={ todo }  setTodo={ setTodo } setTodoDisplay= { setTodoDisplay } />
            <DeleteTodo />
        </>
    );
};

export default TodoDetails;