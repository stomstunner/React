import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";



function App() {
 
  // so ham jo value cards me banayenge vaariable banayenge woh jaa ke props me show hoga card.jsx me 
  // like  hame banaye abhi myJsxArray woh jaa ke props ki help se card me show hoga

  // lets  make a variable that will inject the jsx element card 
  // althouth we can put the variable and the decleleration on the jsx independently 

  // <card name = 'ujjwal' />

  let myObject = {
    name : 'ujjwal',
    email : 'ujjwal@gmail.com'
  };

  // we can make our own array also and inject to the jsx element
  let myArray = [1,2,3,4,5,6];
  // but we cannot directly place the object or array variable name to the jsx element we have to use the {} evaluated expresssion 
  // and then we have to store that evaluated expression to a varibale 


  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
          <h1 className="mb-10 text-center text-5xl font-bold text-red-500">Tailwind Working 🚀</h1>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* // now we can import the card here as a components */}
          {/* <Card name = 'ujjwalnirmal' myJsxArray = {myArray} myJsxObject= {myObject}  />
          <Card meraMan = {{name:'ujjwal', email:"ujjwal@gmail.com"}}/>
          <Card /> */}

          {/* now we can use the props or lets se variable to pass the varibale and that will inject to our card rememebr that ki hamra variable ke object hoga (props ) toh ham jab usse fucntion me ya toh bass props  aur dot method ke sahare use kar sakte hai nahi toh usak destructrue kar ke bass object ka variable hi use akr sakte hai fucntion me bass {iske ander variabke ka naam likh do kcuh bhi likh sate ho } */}

          <Card companyname = "Apple" btnText = "Visit Apple Store"/>
          <Card companyname = "HP" />
          <Card companyname = "Dell" />
          <Card companyname = "Acer" />
          <Card companyname = "Lenovo" />
          <Card companyname = "Asus" />
        </div>
      </div>
    </>
  );
}

export default App;
