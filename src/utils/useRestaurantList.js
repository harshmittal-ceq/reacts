import { useEffect,useState } from "react";

const useRestaurantList=()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([])
	const [filteredRestaurant,setFilteredRestaurant] = useState([])

    useEffect(()=>{
		fetchData(true);
	},[])

	const fetchData= async (a)=>{
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)

		const json = await data.json();
		console.log("data",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
		//Optional chaining
		setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	}

    return {listOfRestaurants,filteredRestaurant}
}

export default useRestaurantList;