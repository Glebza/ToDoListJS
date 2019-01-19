import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const ToDoList = ({tasks, onDeleted}) => {
    const elements = tasks.map((task) => {
        return <li key={task.id} className="list-group-item"><TodoListItem {...task} onDeleted = {() => onDeleted(task.id)}/></li>
    });
    return (
        <ul className="list-group todo-list">
            {elements}

        </ul>)
};
export default ToDoList;