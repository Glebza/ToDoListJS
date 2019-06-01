import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {


    state = {
        btns: ['btn btn-info', 'btn btn-outline-secondary', 'btn btn-outline-secondary'],
    };


    onButtonClick = (index) => {
        const newBtns = [];
        for (let i = 0; i < this.state.btns.length; i++) {
            if (Number(index.target.id) === i) {
                newBtns[i] = "btn btn-info";
            } else {
                newBtns[i] = "btn btn-outline-secondary";
            }
        }
        this.setState({btns: newBtns});
        this.props.onInfoBtnClick(index.target.innerText.toLowerCase());
    };

    render() {

        const {btns} = this.state;

        return (
            <div className="btn-group">
                <button id={0} type="button" className={btns[0]} onClick={this.onButtonClick}>All</button>
                <button id={1} type="button" className={btns[1]} onClick={this.onButtonClick}>Active</button>
                <button id={2} type="button" className={btns[2]} onClick={this.onButtonClick}>Done</button>
            </div>
        )
    }

};

