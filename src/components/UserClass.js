import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"default"
            }
        }

        console.log("userclass constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name + " Child component mount");

        //API CALLS this method
        const data = await fetch("https://api.github.com/users/harshmittal-cyber");
        const json = await data.json();

        this.setState({
            userInfo:json
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log("Component Did update");
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;

        // console.log("userclass render")

        return(
            <div className="user-card">
                <img src={avatar_url} alt="harsh"/>
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: harsh.mittal17</h4>
            </div>
        )
    }
}

export default UserClass;


/********
 * 
 * (Mounting cycle finished)
 * Constructor is called
 * Render (dummy)
 *  <HTML Dummy>
 * Component Did Mount is called
 *  <API CALL/>
 *  <this.setState/> -> state variable is updated
 * 
 * -------- UPDATE CYCLE BEGIN AFTER SETSTATE-------
 * render(API data)
 * <HTML (new API data)
 * componentDidupdate
 * 
 */