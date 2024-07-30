import {useState,useEffect} from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login")

  //if no dependency array => useEffect is called on every render
  //if dependancy array is [btnNameReact]=> everytime btnNameReact changes component renders
    useEffect(()=>{
    },[btnNameReact])

    const onlineStatus = useOnlineStatus()
    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}>
                            Grocery
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' 
                        onClick={()=>{
                            btnNameReact==='Login'
                            ?setBtnNameReact("Logout")
                            :setBtnNameReact("Login")}}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header
