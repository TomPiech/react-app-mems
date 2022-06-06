import React, { Component } from "react";
import './MemItem.css';
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import Button from '@mui/material/Button';


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
                            <Button variant="contained" style={{width: '196px', margin: '2px', fontSize: 20}} onClick={this.handleClickUp}><ThumbUp className="MemItem__upVotesIcon"/>{this.props.upvotes}</Button>
                        </div>

                        <div className="MemItem__downVotes">
                            <Button variant="contained" style={{width: '196px', margin: '2px', fontSize: 20 }} className="MemItem__downButton" onClick={this.handleClickDown}><ThumbDown className="MemItem__downVotesIcon" />{this.props.downvotes}</Button>
                        </div>
                       
                    </div>
                </div>
            </li>
        )
    }
};





