import { useState,useEffect } from 'react'
import RestaurantCard,{withpromotedLabel} from './RestaurantCard'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantList from '../utils/useRestaurantList'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Body = () => {
  	//local state variable super powerful variable
	const [searchText,setSearchText] = useState("");
	const [listOfRestaurants,setListOfRestaurants] = useState([])
	const [filteredRestaurant,setFilteredRestaurant] = useState([])

	const onlineStatus = useOnlineStatus();

	if(onlineStatus===false){
		return <h1>Looks like you are offline!! Please check your internet connection</h1>
	}

	// const {listOfRestaurants,filteredRestaurant}= useRestaurantList()
	useEffect(()=>{
		fetchData(true);
	},[])

	const fetchData= async (a)=>{
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)

		const json = await data.json();
		//Optional chaining
		setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	}

	const RestaurantCardPromoted = withpromotedLabel(RestaurantCard);

	const {loggedInUser,setUserName}=useContext(UserContext)

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
					<div className='search m-4 p-4 flex items-center'>
						<label>UserName</label>
						<input 
							value={loggedInUser}
							className='border border-black p-2' 
							onChange={(e)=>setUserName(e.target.value)}/>
					</div>
				</div>
				<div className="flex flex-wrap">
					{
						filteredRestaurant.map((restaurant)=>(
							// if the restaurant is promoted then add promoted in card
							<Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
								{
									restaurant.info.isOpen ? (
										<RestaurantCardPromoted 
											key={restaurant.info.id}  
											resData={restaurant}
										/>
									)
									:
									(
										<RestaurantCard 
											key={restaurant.info.id} 
											resData={restaurant}
										/>
									)
								}
							</Link>
						))
					}
				</div>
		</div>
	)
}

export default Body
