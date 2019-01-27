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
            {label: "Drunk sleep", important: true, done:false, id: 2},
            {label: "Listen to the music", important: false, done:false, id: 3},
        ],
        term:'',



    };
   // taskBackup = [...this.state.tasks];

    // onInfoButtonClick = (fieldName) =>{
    //     let tasks = this.state.tasks.filter((el) => {return el[fieldName]});
    //     this.setState( {filteredTasks:tasks});
    // };

    onSearchChanged =(e)=> {

        this.setState({term:e});
    };

    deleteElement =(id) =>{
        this.setState(({tasks}) =>{
            const idx = tasks.findIndex((el) => {return el.id === id});
            const newArray = [...tasks.slice(0,idx),...tasks.slice(idx+1)];
            return {tasks:newArray};
        });

    };

    addElement = (text) => {
        console.log({text});
        const newElement = {label:text,important:false,done:false,id:this.nextElement++};
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



    toggleDone = (id) => {
        this.setState(({tasks}) =>{

                return {tasks:this.toggleProperty(tasks, id, 'done')};
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

    search = (term,items) =>{
        if (term.length === 0){
            return items;
        }else{
            return items.filter((el) => {return el.label.indexOf(term) > -1});
        }
    };

    render() {

        const {tasks,term} = this.state;
        const visibleItems = this.search(term,tasks);
        const doneCount =  tasks.filter((el) => el.done ).length;
        const toDoCount = tasks.length - doneCount;

        return (

            <div className="todo-app">
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = {this.onSearchChanged}/>
                    <ItemStatusFilter onInfoButtonClick = {this.onInfoButtonClick}/>
                </div>

                <ToDoList tasks={visibleItems}
                          onDeleted={this.deleteElement}
                          onToggleImportant = {this.toggleImportant}
                          onToggleDone = {this.toggleDone}

                />
                <ItemCreator onCreated={this.addElement}/>
            </div>)
    }

}
;
