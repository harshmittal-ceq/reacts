import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {
  	//local state variable super powerful variable
	const [listOfRestaurants,setListOfRestaurants] = useState([])
	const [filteredRestaurant,setFilteredRestaurant] = useState([])
	const [searchText,setSearchText] = useState("");

	//Whenever state variables update, react triggers a reconcialiation cycle(re-renders the component)
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

	//conditional rendering
	return listOfRestaurants.length===0 ? (
		<Shimmer/>
	):(
		<div className="body">
				<div className="filter">
					<div className='search'>
						<input 
							type='text' 
							className='search-box' 
							value={searchText}
							onChange={
								(e)=>{
									setSearchText(e.target.value)
								}
							}
						/>
						<button onClick={()=>{
						//filter the restaurant cards and update the UI
							console.log(searchText)
							const filteredRestaurant = listOfRestaurants.filter(
								(res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
							)
							setFilteredRestaurant(filteredRestaurant)
						}}>Search</button>
					</div>
					<button className='filter-btn' 
						onClick={()=>{
							const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>5)
							setFilteredRestaurant(filteredList)
						}}
					>
						Top rated Restaurant
					</button>
				</div>
				<div className="res-container">
					{
						filteredRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
					}
				</div>
		</div>
	)
}

export default Body
