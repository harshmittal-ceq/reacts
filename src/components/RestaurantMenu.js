import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const [showIndex,setShowIndex]=useState(-1);

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage,price}=
        resInfo?.cards[2]?.card?.card?.info

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card.card?.["@type"]===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{
                cuisines.join(",")} - {costForTwoMessage}
            </p>

            {/* categories accordian */}
            {categories.map((category,index)=>(
                //controlled component\
                <RestaurantCategory 
                    key={category.card.card.title} 
                    data={category.card.card}
                    showItems={index===showIndex ? true:false}
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu