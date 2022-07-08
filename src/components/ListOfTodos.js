import React from "react";
import {generateDateOfTodos} from './Utils'
import TodoDetails from './TodoDetails';

const ListOfTodos = () => {
    const todosRender = (values) => {
      return  Object.entries(values).map(([idOfTodo, value], j) => {
            return (
                <div key={idOfTodo} id={idOfTodo} className="d-flex list-group-item">
                    <TodoDetails item={value[0]} checked={value[1]} />
                </div>
            );
        });
    };

    const contentRender = Object.entries(window.todos).map(([id, values], i) => {
        let date = generateDateOfTodos(id);
        
        return (
            <div key={id} id={id}>
                <div className="d-flex mb-3 date">
                    <div className="p-2">
                        <div className="month">{date.getMonthName()}</div>
                        <div className="year">{date.getFullYear()}</div>
                        <div className="day">{date.getDate()}</div>
                    </div>
                    <div className="ms-auto p-2">
                        <div className="dayName">{date.getDayName()}</div>
                    </div>
                </div>
                <div className="list-group">
                    { todosRender(values) }
                </div>
            </div>
        );
    });

    return (
         <div className="card-body">
            { contentRender }
         </div>
    );
};

export default ListOfTodos;