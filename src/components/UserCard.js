import { useState } from "react";
import { useEffect } from "react";

export const UserCard = (props) =>{
    const {name, location} = props;
    const count = useState(0);
    const count1 = useState(1);
    // what will happen if we create a setInterval inside my useEffect ?? and how we can cleanup the mess? just by passing the return statemenr and writing the code of clearInterval

    useEffect(()=>{
        setInterval(()=>{
            console.log("useEffect")
        },1000);   
    },[]);

    return (
        <div className="user-card">
            <h1>Name : {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact: @shivam</h2>
            <h1>{count} {count1}</h1>
        </div>
    )
}