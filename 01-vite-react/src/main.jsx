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

createRoot(document.getElementById('root')).render(

    // <App />

    // lets use the MyApp
    // <MyApp/>

    MyApp()

)
