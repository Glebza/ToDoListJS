import React, {Component} from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {




    render() {
        const {label,important,done} = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
            <span className="todo-list-item-label" onClick={this.props.onToggleDone}>{label}</span>
            <button type="button" className="btn todo-list-item-btn btn-outline-success btn-sm float-right"
                    onClick={this.props.onToggleImportant}>
                <i className="fas fa-exclamation"/>
            </button>
            <button type="button" className="btn todo-list-item-btn btn-outline-danger btn-sm float-right"
                    onClick={this.props.onDeleted}>
                <i className="fas fa-poo"/>
            </button>
            </span>
        )
    }


}


