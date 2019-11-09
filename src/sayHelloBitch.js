import React from "react";

function App(){
    const sayHelloBitch = () => {
        console.log("hello bitch");
      };
    return(
        <div>
        <h1>hello bitch</h1>
        <button onClick={sayHelloBitch}>bitch button look in the console --------------------------------></button>
      </div>
    )
}

export default App;