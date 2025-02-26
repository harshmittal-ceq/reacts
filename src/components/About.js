import React from "react";
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(){
        super();
        console.log("about class")
    }

    componentDidMount(){
        // console.log("Parent component mount");
    }

    render(){
        // console.log("about return class")

        return(
            <div>
                <h1>About</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser})=>
                            <h1 className="font-bold">{loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is harsh building the react project</h2>
                <UserClass
                    name={"trump"} 
                    location = {"Cheeka, Kaithal"}
                />
                <UserClass
                    name={"Elon Musk"} 
                    location = {"U.S.A"}
                />
            </div>
        )
    }
}

/*
    - Parent Constructor
    - Parent Render
        - Harsh constructor
        - Harsh render
        - Elon constructor
        - Elon render

        <DOM UPDATED - IN SINGLE BATCH>
        - Harsh component did mount
        - Elon component did mount
    - Parent component did mount
*/

export default About
