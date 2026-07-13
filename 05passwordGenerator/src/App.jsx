// import { useCallback, useEffect, useState, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

// function App() {
//   // lets make the hooks for the lenght and the number and character selection
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   // now we use the useRef hook jisse ham refrence lete hai chzo ka
//   const passwordRef = useRef(null);

//   const copyPasswordToClipboard = useCallback( ()=>{
//     // now we make the effect ki copy karne pe hamara text select ho rha hai
//     passwordRef.current?.select()
//     // use se jo current select hua hai usko select effect de do  ? becuse ki ager null na ho tho hi dena

//     // we also have the methid where we can select the only a range of the value
//     // @important
//     // passwordRef.current?.setSelectionRange(0,10)

//     // now we copy to the clipboard

//     window.navigator.clipboard.writeText(password)
//   },[password])

//   // lets make the password generator function jisme ham callback hook ka use karnege jo baar baar call karta hai function ko dependencies pe hite hone pe jisse hamare yaha numberallowed and character allowed hai toh jab jab woh dependencies hit hoga tab tab hamra password change hoga ,, isek liye ham useCallback hook me ham ek fucntion deta hai jo baar baar call hota hai aur dependecies ko deta hai in an  array// use callback se cache ke ander rehta hai aur jo call hota hai dependecies se bass utna hi agli baar change hota hai
//   const passwordGenerator = useCallback(() => {
//     // now we make tha variable that hass the content and a variable where we store the content from them
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     // and if the number is allowed then we take the add the number to the str so it is easy to take content from them
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "`~!@#$%^&*()_+=-?/>.<,{}[]'';:";

//     // now we take the for loop for generation the random password from the str and based uopn the length
//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);

//       // now we put the chanracter in the pass baed upon the char
//       // char me hamrare pass ek index aaya hai pure str ka
//       // so har baar loop chane pe hamre pass koi naya index aayeha
//       pass += str.charAt(char);
//     }
//     // now we add the ourpassword to the pass
//     setPassword(pass);
//   }, [length,numberAllowed, charAllowed, setPassword]);

//   // now we see the useeffect for calling the funtion and its dependendencies
//   useEffect(()=>{
//     passwordGenerator()
//   }, [length, numberAllowed,setPassword, passwordGenerator])

//   return (
//     <>
//       <div className="w-full max-w-2xl mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-700 text-xl">
//         <h1 className="text-white text-center">Password Generator</h1>
//         <div className="flex shadow-2xl rounded-xl mb-4 overflow-hidden ">
//           <input
//            type="text"
//            value={password}
//            className=" outline-none w-full py-2 px-3" placeholder="password"
//            readOnly
//            // now we take the refrecne of this
//            ref={passwordRef}
//            />
//           <button
//           // now we write the onclickmethod for copy
//           onClick={copyPasswordToClipboard}
//             className="outline-none px-3 py-0.5 shrink-0 bg-blue-700 text-white"
//           >copy
//           </button>

//         </div>
//           <div
//           className="flex text-sm gap-x-2"
//           >
//             <div className="flex items-center gap-x-1">

//             <input
//             type="range"
//             min={8}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(event)=>{setLength(event.target.value)}}

//             // yaha pe hamne ek onchange property lagaya hai jisme ham ek function ko pass lar rhe hai jo ki event pe pofus kar rha hai jaisse hi setlenght ka vlaue change hoga waise hi iska bhi vlaue change hoga
//             />
//             <label>Length: {length}</label>
//             </div>

//             <div
//             className="flex items-center gap-x-1"
//             >

//               <input
//               type="checkbox"
//               defaultChecked= {charAllowed}
//               id="charInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev )
//                 // matlab setnumber allowed ko call kiya aur jo uska previous vlaue tha usko chagne kar diya tik tha toh untik kar diya
//               }}
//               />
//               <label htmlFor="charInput">Character</label>
//             </div>
//             <div
//             className="flex items-center gap-x-1"
//             >

//               <input
//               type="checkbox"
//               defaultChecked= {numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev )
//                 // matlab setnumber allowed ko call kiya aur jo uska previous vlaue tha usko chagne kar diya tik tha toh untik kar diya
//               }}
//               />
//               <label htmlFor="numberInput">Numbers</label>
//             </div>

//           </div>
//       </div>
//     </>
//   );
// }

// export default App;

// ================
import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // lets make the hooks for the lenght and the number and character selection
  const [length, setLength] = useState(3);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // now we use the useRef hook jisse ham refrence lete hai chzo ka
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    // now we make the effect ki copy karne pe hamara text select ho rha hai
    passwordRef.current?.select();
    // use se jo current select hua hai usko select effect de do  ? becuse ki ager null na ho tho hi dena

    // we also have the methid where we can select the only a range of the value
    // @important
    // passwordRef.current?.setSelectionRange(0,10)

    // now we copy to the clipboard

    window.navigator.clipboard.writeText(password);
  }, [password]);

  // lets make the password generator function jisme ham callback hook ka use karnege jo baar baar call karta hai function ko dependencies pe hite hone pe jisse hamare yaha numberallowed and character allowed hai toh jab jab woh dependencies hit hoga tab tab hamra password change hoga ,, isek liye ham useCallback hook me ham ek fucntion deta hai jo baar baar call hota hai aur dependecies ko deta hai in an  array// use callback se cache ke ander rehta hai aur jo call hota hai dependecies se bass utna hi agli baar change hota hai
  const passwordGenerator = useCallback(() => {
    // now we make tha variable that hass the content and a variable where we store the content from them
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // and if the number is allowed then we take the add the number to the str so it is easy to take content from them
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_+=-?/>.<,{}[]'';:";

    // now we take the for loop for generation the random password from the str and based uopn the length
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      // now we put the chanracter in the pass baed upon the char
      // char me hamrare pass ek index aaya hai pure str ka
      // so har baar loop chane pe hamre pass koi naya index aayeha
      pass += str.charAt(char);
    }
    // now we add the ourpassword to the pass
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // now we see the useeffect for calling the funtion and its dependendencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, passwordGenerator, charAllowed]);

  // Exact reproduction of your clcStrength() color rules
  const getStrengthColor = () => {
    let hasUpper = true; // Default string includes uppercase letters
    let hasLower = true; // Default string includes lowercase letters
    let hasNumber = numberAllowed;
    let hasSymbol = charAllowed;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && length >= 10) {
      return "rgba(0, 255, 0, 1)";
    } else if ((hasLower || hasUpper) && (hasNumber || hasSymbol) && length >= 8) {
      return "#ff0";
    } else if ((hasLower || hasNumber || hasSymbol || hasUpper) && length >= 6) {
      return "#fff";
    } else {
      return "#f00";
    }
  };

  const indicatorColor = getStrengthColor();

  return (
    <>
      {/* Container wrapper matching image 1 viewports */}
      <div className="w-screen h-screen flex flex-col items-center justify-center font-sans antialiased select-none">
        {/* Glassmorphism main card box */}
        <div className="relative flex flex-col items-center justify-center backdrop-blur-[6px] shadow-[0_20px_40px_rgba(49,49,49,0.538),0_0_30px_rgba(0,150,255,0.06)] border border-white/20 rounded-[15px] w-[400px] h-[500px]">
          {/* Header text layout */}
          <h1 className="text-[rgba(255,255,255,0.753)] text-center text-[1.8rem] font-bold uppercase tracking-[1px] mb-[1rem] mt-[1.5rem] font-sans">Password Generator</h1>

          {/* Output input display container row */}
          <div className="relative flex items-center w-[85%] backdrop-blur-[6px] shadow-[0_10px_30px_rgba(49,49,49,0.538),0_0_30px_rgba(0,150,255,0.06)] border-b-2 border-white/20 rounded-[10px] mt-[5px] mb-[5px] p-[0.35rem]">
            <input type="text" value={password} className="w-full bg-transparent text-black font-bold text-[1.2rem] leading-[30px] tracking-[1px] px-[1.7rem] pr-[3.25rem] border-none outline-none text-center placeholder:text-[rgba(0,0,0,0.877)] placeholder:uppercase placeholder:font-semibold font-sans" placeholder="PASSWORD" readOnly ref={passwordRef} />

            {/* Copy button triggers */}
            <button onClick={copyPasswordToClipboard} className="absolute right-[1.5rem] bg-transparent border-none outline-none cursor-pointer active:scale-95 group text-black hover:text-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[23px] h-[23px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-8.25M8.25 16.5H6a2.25 2.25 0 01-2.25-2.25V6A2.25 2.25 0 016 3.75h8.25A2.25 2.25 0 0116.5 6v2.25" />
              </svg>
            </button>
          </div>

          {/* Form Controls wrapper */}
          <div className="flex flex-col w-[85%] rounded-[10px] p-[1rem] font-sans">
            {/* Length readout info track */}
            <div className="flex items-center justify-between text-white text-[1.2rem] font-normal font-sans">
              <p>Password Length</p>
              <p className="font-medium">{length}</p>
            </div>

            {/* Custom linear gradient slider element panel */}
            <input
              type="range"
              min={3}
              max={100}
              value={length}
              className="w-full h-[1rem] bg-gradient-to-r from-[#ff8a8a] via-[rgb(188,47,47)] to-[rgb(141,28,28)] shadow-[0_10px_30px_rgba(49,49,49,0.651),0_0_30px_rgba(255,86,86,0.308)] rounded-[10px] mt-[1.5rem] mb-[1rem] cursor-pointer appearance-none focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[1.5rem] [&::-webkit-slider-thumb]:w-[1.5rem] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(212,58,58)] [&::-webkit-slider-thumb]:shadow-[0_0_10px_3px_rgb(177,51,51),0_0_30px_rgba(137,62,62,0.716)] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-100 [&::-webkit-slider-thumb]:hover:bg-[rgba(161,36,36,0.976)]"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />

            {/* Options Checkbox fields */}
            <div className="flex flex-col gap-y-1 mb-2 font-sans">
              {/* Characters Selection Track */}
              <div className="flex items-center gap-x-[0.5rem] my-[0.4rem]">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  className="w-[20px] h-[20px] bg-[rgba(255,113,113,0.342)] backdrop-blur-[20px] shadow-[0_10px_30px_rgba(49,49,49,0.651)] rounded-[5px] cursor-pointer appearance-none relative checked:bg-[rgba(92,17,17,0.808)] checked:before:content-['✔'] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-white checked:before:text-[14px] checked:before:font-bold"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="charInput" className="text-[rgba(255,255,255,0.897)] tracking-[0.025rem] text-[1.1rem] cursor-pointer font-sans font-normal">
                  Includes Symbols
                </label>
              </div>

              {/* Numbers Selection Track */}
              <div className="flex items-center gap-x-[0.5rem] my-[0.4rem]">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  className="w-[20px] h-[20px] bg-[rgba(255,113,113,0.342)] backdrop-blur-[20px] shadow-[0_10px_30px_rgba(49,49,49,0.651)] rounded-[5px] cursor-pointer appearance-none relative checked:bg-[rgba(92,17,17,0.808)] checked:before:content-['✔'] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-white checked:before:text-[14px] checked:before:font-bold"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput" className="text-[rgba(255,255,255,0.897)] tracking-[0.025rem] text-[1.1rem] cursor-pointer font-sans font-normal">
                  Includes Numbers
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[0.4rem] mb-[1.5rem] font-sans">
              <p className="text-white text-[1.2rem] font-normal font-sans">Strength</p>
              <div
                className="w-[1.5rem] h-[1.5rem] rounded-full mr-[4px] transition-all duration-300"
                style={{
                  backgroundColor: indicatorColor,
                  boxShadow: `0px 0px 12px 3px ${indicatorColor}`,
                }}
              ></div>
            </div>

           {/* Bottom Generate Password action trigger button */}
          <button
            onClick={passwordGenerator}
            className="w-full py-[1rem] m-0 bg-transparent backdrop-blur-[10px] text-center uppercase tracking-[1px] font-semibold text-[1rem] border-0 border-b-2 border-solid border-white/20 shadow-[0_10px_30px_rgba(49,49,49,0.538),0_0_30px_rgba(0,150,255,0.06)] rounded-[10px] text-[rgba(247,247,247,0.812)] active:scale-[0.98] transition-all cursor-pointer font-sans"
          >
            Generate Password
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
