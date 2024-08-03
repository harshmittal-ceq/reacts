import React, { lazy,Suspense,useEffect,useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

//for optimization do these things
// Chunking
// Code splitting
// Dynamic Bundling
//Lazy Loading
//On demand loading 

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"))
//not using keys (not accpetable) (worst) <<<<<<< index as key(average) <<<<<<<<<<<<< unique id (best)
const AppLayout = () => {
	const [userName,setUserName]=useState();

	useEffect(()=>{
		const data ={
			name:"Harsh Mittal"
		}
		setUserName(data.name)
	},[])

    return (
		<Provider store={appStore}>
			<UserContext.Provider value={{loggedInUser:userName,setUserName}}>
				<div className="app">
					<Header/>
					<Outlet/>
		  		</div>
			</UserContext.Provider>
		</Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
		{
			path:"/",
			element:<Body/>
		},
		{
			path:"/about",
			element:<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>
		},
		{
			path:"/contact",
			element:<Contact/>
		},
		{
			path:"/restaurant/:resId",
			element:<RestaurantMenu/>
		},
		{
			path:"/grocery",
			element:<Suspense fallback={<h1>Loading</h1>}>
				<Grocery/>
			</Suspense>
		},
		{
			path:"/cart",
			element:<Cart/>
		}
    ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
