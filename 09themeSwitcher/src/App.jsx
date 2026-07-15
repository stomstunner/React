import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./index.css"
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode , setThemeMode] = useState('light')
  // yaha ham thememode ko defualt value kuch de rahe hai jisko ki ham baad me change kar sakte hai 

  // hamne methods toh laa diya hai provider me value ke rupp me but woh kya karte hai ye define nahi hai toh uske liye hack ye hai ki ham uske hi naam ka method bana ke bata de 

  const lightTheme = ()=>{
    setThemeMode('light')
  }

  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  // now we write the js for firstly removing the light or dark theme then adding what we want and that why we use the useEffect ki hamara program chalte hi run ho jaye

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    // now we se the theme only kyuki theme mera setThememode se aa rha hai 
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

    <ThemeProvider value={{darkTheme, lightTheme,themeMode}}>
      {/* yaha ham provider me vlaue dete hai kis chiz ka hamre pass access hai  */}

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            {/* themebtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
