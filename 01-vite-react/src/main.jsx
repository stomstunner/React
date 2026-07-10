// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// eventually ham jo app ko laa rhae hai woh usme bhi toh ek fucntion hi hai then why not we can make our own fucntion here and try to use it and render it 

function MyApp(){
    return(
        <div>
            <h1>Hello bro !</h1>
        </div>
    )
}

// now under the hood hamre pass jo fucntion hai woh apne ander ke tags ko object me badlata hai and then usse reder karta hai page pe toh ham tags ko banayenge object se

const ReactElement = {
    type:'a',
    props: {
        herf : 'https://www.google.com',
        target: '_blank'
    },
    children: "Click me to go to google"

}
// affcource it doesnt run becsue we do not have the custom render ro render this object

// lets make the fucntion for 1 sec 
const anotherElement =   <a href="https://www.google.com" target='_blank'>visit google</a>

createRoot(document.getElementById('root')).render(

    // <App />

    // lets use the MyApp
    // <MyApp/>

    // MyApp()

    // lets use the ReactElement jo ki ek obejct hai 
    // ReactElement

    // now we can use the anotherElement kyuki usme tag sahi se rendered hai 
    anotherElement


)
