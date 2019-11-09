import React, {useState} from "react";
import SayHelloBitch from "./sayHelloBitch";
import BitchTweet from "./BitchTweet"
import './App.css';

function App() {

 const [isRed, setRed]= useState(false);
 const [count, setCount]= useState(0);
 const increment = () => {
   setCount(count + 1);
   setRed(true);
 }

  return (
    <div className="app">
      <button onClick={increment}>Increment</button>
      
      <SayHelloBitch />
      <br></br>
      <h1 className={isRed ? "red" : ""} >AHHHHHHHHHHH!</h1>
      <BitchTweet name="Like, Totally" message="random bitch tweet" number= {count}/>
      <BitchTweet name="Ass Butt" message="random bitch tweet" number= {count}/>
      <BitchTweet name="The Simpsons" message="random bitch tweet" number= {count}/>
      <BitchTweet name="Mamma-lick-a-boo-boo-daddy" message="random bitch tweet" number= {count}/>
    </div>
  )
}

export default App;