import React, {Component} from 'react';
import AppHeader from '../AppHeader/';
import ToDoList from '../TodoList/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter/';
import './App.css';

export default class App extends Component {

    state = {tasks :
        [
            {label: "Drink coffee", important: true, id: 1},
            {label: "Go to sleep", important: true, id: 2},
            {label: "Listen to the music", important: false, id: 3},
        ]
    };

    deleteElement =(id) =>{
        this.setState(({tasks}) =>{
            const idx = tasks.findIndex((el) => {return el.id === id})
            const newArray = [...tasks.slice(0,idx),...tasks.slice(idx+1)];
            return {tasks:newArray};
        });

    };
    render() {
        return (

            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <ToDoList tasks={this.state.tasks} onDeleted={(id) =>this.deleteElement(id)}/>
            </div>)
    }

}
;
