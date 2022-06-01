import React, { Component } from "react";
import './MemItem.css';
import ListMems from "../data/ListMems";
import PropTypes from 'prop-types';
import './MemWrapper.css';
import { ThumbUp, ThumbDown } from "@mui/icons-material";


export class MemsWrapper extends Component {

  
    render() {
        return this.props.memes.map(item => (
            <MemItem
                key={item.title}
                title={item.title}
                images={item.img}
                upvotes={item.upvotes}
                downvotes={item.downvotes}
                upClick={() => this.props.handleEventUp(item)}
                downClick={() => this.props.handleEventDown(item)}
                index={item.index}
            />
        ));
    }
}


MemsWrapper.propTypes = {
    memes: PropTypes.array,
    handleEventUp: PropTypes.func,
    handleEventDown: PropTypes.func
};



export class MemItem extends Component {

    handleClickUp = () => this.props.upClick(this.props.title);
    handleClickDown = () => this.props.downClick(this.props.title);




    render() {
        return (

            <li className="MemItem__wrapper">
                <div className="MemItem__mainDiv">

                    <h2 className="MemItem__name">
                        {this.props.title}

                    </h2>

                    <img
                        src={this.props.images} alt="Mem"
                        className="MemItem__image"
                    />

                    <div className="MemItem__Votes">

                        <div className="MemItem__upVotes">
                            <button className="MemItem__upButton" onClick={this.handleClickUp}>{this.props.upvotes}<ThumbUp className="MemItem__upVotesIcon" /></button>
                        </div>

                        <div className="MemItem__downVotes">
                            <button className="MemItem__downButton" onClick={this.handleClickDown}>{this.props.downvotes}<ThumbDown className="MemItem__downVotesIcon" /></button>
                        </div>

                        <h1>{this.props.index}</h1>

                    </div>
                </div>
            </li>
        )
    }
};





