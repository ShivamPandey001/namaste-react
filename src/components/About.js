import { UserCard } from "./UserCard";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    // as soon as our class loaded, our constructor is called
    constructor(props){
        super(props);
        // and once constructor is called our state variable got created
        this.state = {
        userInfo : {
            name: "User1 dummy data",
            location: "location dummy",
            avatar_url: "abc"
        },
    };
        console.log("Parent Constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ShivamPandey001");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(json);
        console.log("Parent's componentDidMoount")
    }

    // componentDidMount(){
    //     this.timer = setInterval(()=>{
    //         console.log("Namaste React");
    //     }, 1000); 
    //     console.log("ComponentDID Mount")
    // }

    /**
     * this is how we created our setInterval but it won't stop it will be keep executing and logging Namaste React inside the console until it got cleared, and it will only be cleared if you do compontentWillUnmount()
     * componentDidMount(){
        setInterval(()=>{
            console.log("Namaste React");
        }, 1000); 
    } 1000);
        how you can do compopnentWillUnmount()??

        compontentWillUnMount(){
            clearInterval(timer);
        }

        now once you switch to other page, it will clear the mess

    }
     * 
     */

    // this will be called when the stateVariable got updated, UI gets updated with new Value and at the last it will be called
    // compontentWillUnMount(){
    //     clearInterval(this.timer);
    //     console.log("ComponentWill UnMount");
    // }

    /**
     * below is how we can replicate the dependency array behavior on our code, suppose we have multiple dependency(or state variable), in react we can pass it directly as [count1, count2]
     * componentDidUpdate(prevProps, prevState){
        if(this.state.count !=== this.prevState.count || his.state.count2 !=== this.prevState.count2){
            // do your code
        }
        console.log("component did update is called");
    }
     * 
     */
    //component will unmount will be called just before the component is unmoounting means just before the component gets disappeared, which simply means just when you are moving to new page
    componentWillUnmount(){
        console.log("component will Unmount")
    }

    // after constructor , render will happen
    render(){

        // as our state variable have some default value, So the render will happens with default value
        console.log("Parent render");
        const {name, location,avatar_url} = this.state.userInfo;
        // as per default value our component will be rendered with the default value first, 
        // and now after this our componentDidMount was called
        // debugger;
        return (
        <div>
            <img src={avatar_url} />
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            
            {/* <UserClass name={"Shivam class"} location={"Dugaraha"} /> */}
            <UserCard name={"Shivam class"} location={"Dugaraha"}/>

        </div>
    );}

}


export default About;