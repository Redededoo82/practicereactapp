import React from "react";
import "./App.css";

function bitchTweet(props){

    
    return(
        <div className= "tweet">
            <h3>Name: {props.name}</h3>
            <p>Bitch Tweet: {props.message}</p>
            <h3>Number of likes: {props.number}</h3>
            
        </div>
    )
}

export default bitchTweet;