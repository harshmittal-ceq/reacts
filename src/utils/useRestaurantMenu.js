import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo]=useState(null)

    //fetchdata

    useEffect(()=>{
        fetchData();
        console.log("fetch from use")
    },[])

    console.log("fetch from render")

    const fetchData=async () => {
        const data = await fetch(MENU_API+resId);

        const json = await data.json()
        console.log("data",json.data.cards[4])
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;