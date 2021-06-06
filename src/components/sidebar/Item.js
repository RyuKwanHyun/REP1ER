import React, { useState } from "react";
import "./Item.css";
import {Link, Redirect} from 'react-router-dom';

const Item = ({ _id, name, price, img, detail }) => {

    // const imgUrl = img;

    return (
    <>
        {/* <div className = "item_row"> */}
            <div className = "item_col">
                <p>
                    <img src = {require("../sidebar/images/" + img).default} alt = ""/> 
                </p>
                <h3>{name}</h3>
                <h5>{price}￦</h5>
                <h5>{detail}</h5>
                <button className = "detail_button"><Link to = {`/itemdetail/${_id}`}>Detail</Link></button>
            </div>
        {/* </div> */}

      </>
    )};
export default Item;