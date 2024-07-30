import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,id,cloudinaryImageId,sla}=resData?.info;

    return (
        <Link to={`/restaurant/${id}`}>
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
        </Link>
    )
}

export default RestaurantCard