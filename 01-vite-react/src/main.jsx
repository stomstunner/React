// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import App from './App.jsx'

// eventually ham jo app ko laa rhae hai woh usme bhi toh ek fucntion hi hai then why not we can make our own fucntion here and try to use it and render it

// function MyApp() {
//   return (
//     <div>
//       <h1>Hello bro !</h1>
//     </div>
//   );
// }

// now under the hood hamre pass jo fucntion hai woh apne ander ke tags ko object me badlata hai and then usse reder karta hai page pe toh ham tags ko banayenge object se

// const ReactElement = {
//     type:'a',
//     props: {
//         href : 'https://www.google.com',
//         target: '_blank'
//     },
//     children: "Click me to go to google"

// }
// affcource it doesnt run becsue we do not have the custom render ro render this object

// lets make the fucntion for 1 sec
// const anotherElement =   <a href="https://www.google.com" target='_blank'>visit google</a>

// lets make the object but by react ka create elment method

const anotherUser = 'ujjwal nirmal'

const renderElement = React.createElement(
    // first thing to give is the tag type only
    'a',
    // then propertyies props in an obejct 
    {href:'https://www.google.com', target : '_blank'},
    // then at the last  we have the write the text 
    'click here to go to google',
    // yaha pe at the last ham evaluated expression hi pass karte hai // ye syntax hai react create element ka 
    anotherUser

    // but ham kya object hi bana rahe hai toh kya object ke ander if else  likh sakte hai kya nahi kyuki object ke ander ham key vlaue pair ko lete hai 
    // thats why ham jab App.jsx ke ander return me tag ke ander {} isme evaluated expression dete hai naa ki if else pura kyuki usse object me badla nahi jaa sakte hai 
)

createRoot(document.getElementById("root")).render(
  // <App />

  // lets use the MyApp
  // <MyApp/>

  // MyApp()

  // lets use the ReactElement jo ki ek obejct hai
  // ReactElement

  // now we can use the anotherElement kyuki usme tag sahi se rendered hai
//   anotherElement,

    // now i can use the object of renderElement becuase it is maded by the React.createElement method 
    renderElement

    // lets take the app.jsx file  angain and learn the evaluated expression = varibale injection
    // <App/>
);
