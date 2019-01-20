import React, {Component} from 'react';

import './ItemCreator.css'

export default class ItemCreator extends React.Component{

    render(){
        return (<div className="item-creator">
            <button
                type="button"
                className="btn btn-outline-secondary item-creator-btn"
                onClick={() => this.props.onCreated()}>Add Item</button>
        </div>)
    }

}