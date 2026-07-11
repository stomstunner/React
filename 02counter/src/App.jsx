import { useState } from "react";

import "./App.css";

function App() {
  //lets create a vaiable that stpre the counter value

  // now we can see ki ham apne ui ke varibale o kaisse change karnege
  // toh ab ham variable aisse banne ke banjuye useState hooks ki help se variable banayenge aur jaha bhi hamne uska value update karna hoga woh kar denge

  let [counter, setCounter] = useState(0)
  // ye useState hame 2 array return karta hai 0th index wale pe ham apna varibale ka initital vlaue rakhete hai aur 1st index ek method hota hai uss 0th index ke  varibale ko modify karne ke liye 



  // let counter = 15;
  // we have to make the function that increase the value o counter
  const addvalue = ()=>{

    // setCounter(counter++)
    // also we can first increse the vlaue then pass into the setcouter 

    //  counter = counter + 1; 
     if(counter !== 10) setCounter(counter + 1)
  }
  const removevalue = () => {
    if(counter !== 0) setCounter(counter - 1)
  }
const reset = () => {
  // counter = 0
  setCounter(0)
  // becaue jo ham setcounter ke ander dete hai vlaue woh eventutally main counter ka vlaue ban jata hai 
}

  return (
    <>
    <div id="container">


      <h1>Counter App</h1>
      <h2>Current Value: <span>{counter}</span></h2>
      <button onClick={addvalue}>Increase</button>
      <br />
      <button onClick={removevalue}>decrease</button>
      <button onClick={reset}>Reset</button>

    </div>
    </>
  );
}

export default App;
