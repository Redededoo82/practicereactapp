import React from "react";
import SayHelloBitch from "./sayHelloBitch";
import BitchTweet from "./BitchTweet"
import './App.css';

function App() {

  

  return (
    <div className="app">
      <SayHelloBitch/>
      <br></br>
      <BitchTweet name="Like, Totally" message="random bitch tweet" number= "5"/>
      <BitchTweet name="Ass Butt" message="random bitch tweet" number= "5"/>
      <BitchTweet name="The Simpsons" message="random bitch tweet" number= "5"/>
      <BitchTweet name="Mamma-lick-a-boo-boo-daddy" message="random bitch tweet" number= "5"/>

    </div>
  )
}

export default App;