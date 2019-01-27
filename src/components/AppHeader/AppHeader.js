import React from 'react';
import './AppHeader.css';
const AppHeader = (props) => {
    return (<span>
        <h1 className="app-header">ToDoList APP</h1>
        <h2 className="app-header"> {props.toDo}  more to do. {props.done} done</h2>
    </span>)
};

export  default AppHeader;