import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
const Body = () => {
  //local state variable super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState(resList)

  return (
    <div className="body">
        <div className="filter">
            <button className='filter-btn' 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4)
                    setListOfRestaurants(filteredList)
                }}
            >
                Top rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
            }
        </div>
    </div>
  )
}

export default Body
