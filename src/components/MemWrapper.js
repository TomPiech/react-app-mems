import React from "react";
import MemItem from "./MemItem";
import './MemWrapper.css';
import ListMems from '../data/ListMems';


const MemWrapper = () => (

    <ul className="MemWrapper__wrapper">

        {ListMems.map((item) => (

            <MemItem
                title={item.title}
                images={item.img}
                upvotes={item.upvotes}
                downvotes={item.downvotes}
            />


        ))}

    </ul>

)

export default MemWrapper;