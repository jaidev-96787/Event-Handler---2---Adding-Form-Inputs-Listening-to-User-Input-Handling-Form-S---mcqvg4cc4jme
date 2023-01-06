import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // console.log("Button id is:-button-a")
    if(event.target.id === "button-a"){
      console.log("Button id is:-button-a")
    }
    else{
      console.log("Button id is:-button-b")
    }
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClick}>Button A</button>
      <button id="button-b" onClick={handleClick}>Button B</button>
    </div>
  )
}


export default App;
