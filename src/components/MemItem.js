import React from "react";
import './MemItem.css';



const MemItem = (props) => (

    <li className="MemItem__wrapper">
        <img
            src={props.images} alt="Mem"
            className="MemItem__image"
        />
        <div>
            <h2 className="MemItem__name">
                {props.title}
            </h2>

            <p className="MemItem__description">
                {props.upvotes}
            </p>

            <p className="MemItem__description">
                {props.downvotes}
            </p>

            <button className="MenItem__button">
                visit
            </button>
        </div>
    </li>
);

export default MemItem;