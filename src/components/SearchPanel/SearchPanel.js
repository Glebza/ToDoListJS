import React from 'react';
import './SearchPanel.css';

export default class SearchPanel  extends React.Component{

    state = {
      term:'',
    };

    //TODO: fix bug when erase text in  search line system erase one less symbol
    onSearchChange = (e) =>{
        const term = e.target.value;
        this.setState({term});
        console.log(this.state.term.length);
        console.log(this.state.term);
        this.props.onSearchChange(this.state.term);
    };
    render() {

    return (<input className="search-input" placeholder="search" onChange={this.onSearchChange} value={this.state.term}/>);
    }
};

