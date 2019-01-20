import React, {Component} from 'react';
import AppHeader from '../AppHeader/';
import ToDoList from '../TodoList/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter/';
import ItemCreator from '../ItemCreator/';
import './App.css';

export default class App extends Component {

    nextElement = 4;

    state = {tasks :
        [
            {label: "Drink coffee", important: true, done:false,id: 1},
            {label: "Go to sleep", important: true, done:false, id: 2},
            {label: "Listen to the music", important: false, done:false, id: 3},
        ]
    };


    deleteElement =(id) =>{
        this.setState(({tasks}) =>{
            const idx = tasks.findIndex((el) => {return el.id === id});
            const newArray = [...tasks.slice(0,idx),...tasks.slice(idx+1)];
            return {tasks:newArray};
        });

    };

    addElement = (text) => {

        const newElement = {label:'Hello world',important:false,done:false,id:this.nextElement++};
        this.setState(({tasks}) => {
            const newTasks = [...tasks,newElement];
            return {tasks:newTasks};
        })
    };

    toggleImportant =(id)=>{
      this.setState(({tasks}) =>{
          return {tasks:this.toggleProperty(tasks, id, 'important')};
      })  ;
    };

    toggleProperty(array, id, field) {
        const idx = array.findIndex((el) => {
            return el.id === id
        });
        const oldItem = array[idx];
        const newItem = {...oldItem,[field]: !oldItem[field]};
        const newArray = [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
        console.log(newArray);
        return newArray;
    }

    toggleDone = (id) => {
        this.setState(({tasks}) =>{

                return {tasks:this.toggleProperty(tasks, id, 'done')};
        })  ;
    };

    render() {
        const doneCount =  this.state.tasks.filter((el) => el.done ).length;
        const toDoCount = this.state.tasks.length - doneCount;
        return (

            <div className="todo-app">
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <ToDoList tasks={this.state.tasks}
                          onDeleted={this.deleteElement}
                          onToggleImportant = {this.toggleImportant}
                          onToggleDone = {this.toggleDone}

                />
                <ItemCreator onCreated={()=>this.addElement("")}/>
            </div>)
    }

}
;
