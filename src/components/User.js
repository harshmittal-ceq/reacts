import { useEffect, useState } from "react";

const User =({name,location})=>{
    const [count,setCount]= useState(0)
    const [count2]= useState(1)

    useEffect(()=>{
        //API CALLS
    },[])


    return(
        <div className="user-card -4 p-4 bg-gray-50 rounded-lg">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: harsh.mittal17</h4>
        </div>
    )
}

export default User;