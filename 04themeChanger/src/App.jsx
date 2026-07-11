import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  // lets make a hook for color variable
  const [color, setColor] = useState("olive");

  return (
    <div
      className=" w-full h-screen "
      // we can use the inline css     style={ { backgroundColor : '#212121'}}
      // style={ { backgroundColor : color }}

      style={{ backgroundColor: color }}
    >
      {/* now we make the button bar */}

      <div className="flex flex-wrap fixed justify-center bottom-12  inset-x-0 px-2  ">
        {/* now we make the banner where the putton placed */}

        <div className="banner flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-2 rounded-4xl">

          <button 
          onClick={() => setColor("red")}
          // so ham onlick ke ander hame hamersa fucntion hi pass karni parti hai toh ager ham direct `setColor` likh denge toh woh bass call hogi but uska value to change hi nahi hogi ager hame value change akrna hai toh hame `setColor('red') likhna hoga but usse hamra fucntion call hi ho jayega aur kuch return jayega onclick ke pass but hame toh on clik ko fucntion pass karna hai na ki fucntion ka return toh ham fucntion ke ander fucntion likhenge jisse hoga kya ham onclik ko ek fucntion hi pass karenge aur fucntion ke ander kuch nahi bass ham setColor ko call kar denge `
          // yaad rahe ham setColr me hamesha color ka kya vlaue set karna chahte woh daalte hai 
          className="outline-none rounded-4xl font-bold py-2  px-4 text-white shadow-2xl"
          style={{backgroundColor : "red"}}
          >Red </button>

          
          <button 
          onClick={() => setColor("Green")}
          className="outline-none rounded-4xl font-bold py-2  px-4 text-white shadow-2xl"
          style={{backgroundColor : "Green"}}
          >Green </button>

          <button 
          onClick={() => setColor("Blue")}
          className="outline-none rounded-4xl font-bold py-2  px-4 text-white shadow-2xl"
          style={{backgroundColor : "Blue"}}
          >Blue </button>

          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none rounded-4xl font-bold py-2  px-4 text-black shadow-2xl"
          style={{backgroundColor : "Yellow"}}
          >Yellow </button>

          <button 
          onClick={() => setColor("Olive")}
          className="outline-none rounded-4xl font-bold py-2  px-4 text-white shadow-2xl"
          style={{backgroundColor : "Olive"}}
          >Olive </button>

          <button 
          onClick={() => setColor("Orange")}
          className="outline-none rounded-4xl font-bold py-2  px-4 text-white shadow-2xl"
          style={{backgroundColor : "Orange"}}
          >Orange </button>


        </div>

      </div>
    </div>
  );
}

export default App;
