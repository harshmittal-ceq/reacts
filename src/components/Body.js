import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import useRestaurantList from '../utils/useRestaurantList'

const Body = () => {
  	//local state variable super powerful variable
	const [searchText,setSearchText] = useState("");

	const onlineStatus = useOnlineStatus();

	if(onlineStatus===false){
		return <h1>Looks like you are offline!! Please check your internet connection</h1>
	}

	const {listOfRestaurants,filteredRestaurant}= useRestaurantList()

	//conditional rendering
	return listOfRestaurants.length===0 ? (
		<Shimmer/>
	):(
		<div className="body">
				<div className="filter flex">
					<div className='search m-4 p-4'>
						<input 
							type='text' 
							className='border border-solid border-black' 
							value={searchText}
							onChange={
								(e)=>{
									setSearchText(e.target.value)
								}
							}
						/>
						<button className='px-4 py-2 bg-green-100 m-4 rounded-lg' 
							onClick={()=>{
						//filter the restaurant cards and update the UI
							console.log(searchText)
							const filteredRestaurant = listOfRestaurants.filter(
								(res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
							)
							setFilteredRestaurant(filteredRestaurant)
						}}>Search</button>
					</div>
					<div className='search m-4 p-4 flex items-center'>
						<button className='px-4 py-2 bg-gray-100' 
							onClick={()=>{
								const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>5)
								setFilteredRestaurant(filteredList)
							}}
						>
							Top rated Restaurant
						</button>
					</div>
				</div>
				<div className="flex flex-wrap">
					{
						filteredRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
					}
				</div>
		</div>
	)
}

export default Body
