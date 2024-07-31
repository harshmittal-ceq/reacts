import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        id,
        cloudinaryImageId,
        sla
    } = resData?.info;

    return (
        <Link to={`/restaurant/${id}`}>
            <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img 
                    className="rounded-lg"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla?.slaString}</h4>
            </div>
        </Link>
    )
}

export default RestaurantCard