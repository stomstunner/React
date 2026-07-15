import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
  
  // #region 
  // now we make a hook for usesate kyuki hamre pass jo todo aayegi usse store bhi toh karne hai aur hab aa rjayegi toh hoga toh arraya hi toh usme hame array toh langena hoga aur iskiye ham ussko initially empty lange null lenge toh problem ho sakti hai 
    //#endregion
  

  const [todos, setTodos] = useState([])
  // ye todos hamre pass state me sare todos ka hai 

  // hamre pass jo todos hai woh ek property hai values me dekhe the baaki sab methods hai toh woh kya karega usko yaha ham define kar dete hai // remember ki hahmare method ka naam same ho jo vlaue me hai  
  // aur woh kya parameter le raha hai woh bhi dekhna hai createcontex me jaa ke 

  // lets make the addTod jo ki parameter me bass ek string le raha hai jo ki hamre pass forms se aayeha 

  const addTodo = (todo) => {
    // and ab ham add karna chahate hai sare todos me apna ye ek individual todo 
    // ager ham direct hi setTodos me apna ye todo de denge toh hamre pass previous sare todos mit jayehge aue bass ye hi add ho jayega toh 

    // iske liye hame chaiye ki previous state ka bhi access ho 
    // aur ham previous sare vlaue ko toh destructure kar ke rakhenge hi aur saath me apna naya todo ko bhi add kar denge 
    // destructure ke liye ham ...prev ka use kar sakte hai ki prev me jitne bhi bache hue value hai usko le aao  // yaad rahe hame woh array me dena hai kyuki hamra todos contex api me array hai 

    // setTodos( (prev) => [todo, ...prev] )

    // but isme ye problem hai ki hamarae todo me id hai todo hai aur completed ka bhi section hai
    
    // so hame prev ke place pe object dena hoga aur usme ek dynamic id dena hoga aur fir jitne bhi todos hai usi ko de denge 

//     // ye ham bass todo ko add kar rahe hai 
//     ...todo → naye todo ki properties copy karta hai.
// ...prev → purane todos ko array me copy karta hai.

    //   ...todo me hamre pass form se aane wala addtodo me maan lo todo= masage aur complete me flase ho toh hamre pass ...todo me sara dono chiz naya bana hua todo ka data copy ho jayega // aur ...prev me sara previous baba hua todos copy ho jayega 
    setTodos( (prev) => [ {
      id: Date.now(), ...todo
    } , ...prev ])
  }

  // now same we have updatetodo 
  // jisme ki hame id and massage(todo ) ko dena parega 
  // so hamre pass sare todo jab aa jayenge toh ham unpe loop laga sakte hai id se mathch kar ke kisko update karna hai usko update kar denge 

    const updateTodo = (id, todo) => {
      // yaha hame loop laga ke dekhna parega ki kon se id wale todo ki property ko update karna chahate hai todos is an array 

      setTodos((prev ) => prev.map((prevTodo) => (
        prevTodo.id === id ? todo : prevTodo   
        // ager hamre pass id se todo mil gayi hai toh woh pe ham yahi todo ko use kar lenge jo ki hmare pass parameter me aa raha hai aur nahi mili toh ham sareprevious todo ko waisse hi rehne denge 
      
      )))
      // yaha jab ham prev me hame sara todos mil jayeha aur usme ham map lagayenge toh har todos hamre pass ek object hai , and har ek objec ke ander ek id hai 
      // hamko prev.map me ek ek kar ke todos milta rengea jo ki object hoga 
      // so javascript me hamre pass prev.map ke ander ek ek kar ke object aayega toh uspe ham callback laga sakte hai aur uske id pe call back lagayenge 
      // prevTodo.id === id ime hamra prev.id toh hamare sare object ka ek ek kar ke id aayega but ye id hamre updateTodo ka parameter wla id hai ki ham kisko update karenge 
      // is match hone ke baad 


    }

    // # region now we have this deleteTodo jisme ki ham delete karenge todos ko based on its id
    //#endregion

    const deleteTodo = (id) => {
      // //#region 
      // ab ham setTodos toh lenge hi but delete ke liye hame har todo pe map lagana hoga aur ham usse ke naya array banayenge in a way ki ham filter laganyenge ki jo jo individual todo ka id mere iss parameter wale id se match nahi ho raha hai usse array me add kar do aur jo id se match ho gay a usse add mat karna 

      setTodos((prev) => prev.filter( (todo) => todo.id !== id) )
      // matlab ham sare todo pe filter lagayenge with the above condtion aur usse store kar lenge array me hi setTodo ho raha  hai 
    }

    // now we make the function for the comleted method 
    const toggleComplete = (id) => {
      // //#region 
      // sabse phale ham setTodos lenge aur usme se ham sare todos ko ek saath le lenge aur fir sare todos pe ham loop lagayenge aur loop ke adner ham ek ek individual todo milega jo ki objectt hi hoga toh ham उसके id ko match kanrege apne parameter wale id se ki dono ager same hue toh hame kuch karna hai aur ager id mach nahi hua toh ham wohi previous singles todo ko add karte jayehge 
      // ager match karta hai toh ham todo ko lenge but usme se ham ek check point banayege // todo hamra object hai toh hma {} iske ander hi likhnge ki sare prevoius todo ko le lo uske property ko but bass usme se completed wale property ko reverse kar do jo hamra current todo hai uske completed wale property ko 

      setTodos((prev) =>
        prev.map((prevTodo)=> 
        prevTodo.id === id 
        ?  {...prevTodo , completed: !prevTodo.completed } : prevTodo ) )
    }
    


    // now we want to save the dat on the local store of the browser jo ki hamre browser provide kar hai ye sirf client side pe hi chalega 
    // aur jsisse hi hamra code run hoga ye phale local store pe jayega aur data ko laega 
    // but the important thingh ki hame get karne pe string me data milta hai aur store karte time bhi hame string hi dena parta hai 

    // so we use useEffect kyuki ham chahate hai ki jaisse hi hamra page load ho hamra data aa jaye 

    useEffect( () => {
        const todos = JSON.parse(localStorage.getItem("todo")); 
        // iss line se sabse pahle han local storage se sare data ko layenge baed on id and and usko ham todos naam ke varibale be store kar denge  

        // now we want to set the todos but if we have some todo present 

        if (todos && todos.length > 0 ){
          setTodos(todos);

        }
    }, [])

    // now we have ki ham bass data ko load kiye local storage se but hame data ko set bhi toh karna hai toh ham ager yahi first wale useeffect me hi dependices me todo de de toh hmara jackpot jackpot jab bhi todo add hoga hamra useefeect fir se get bhi karega data ho 
    // so iske liye ham ek aur use effect likhnge 

    useEffect( () => {
      localStorage.setItem("todo", JSON.stringify(todos))
      // ham yaha key and value denge set karte time 
      // ham ne get ke time pe id ko todos bola tha toh yaha bhi ham id ko key ko todos bolenge and jo hamra value hai saro ko string me convert kar ke bhej denge 
    }, [todos])
    // dependicies me hamre pass sara todos hai 
    // and hame jo todos denge woh hoga ek string so we are just converting the our todos to the string then we send to the localStorage 

    // --- Hyper-Interactive Mouse Movement Hook ---
    useEffect(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

  return (
    // now we wrap the thing in a provider and woh provider kya provide karega usko bhi likna parega values me 
    // value ko ham destructure bhi kar sakte hai jaisse hame baar baar woh dot ka use na  karna pare 
    <TodoProvider
      value={{todos,deleteTodo, addTodo, toggleComplete, updateTodo}}
    >
      {/* Absolute Dark Cyber-Grid Underlay */}
      <div 
        className="min-h-screen py-12 px-4 relative overflow-hidden flex items-center justify-center font-sans bg-[#02040a]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        
        {/* Real-time Cursor Tracking Spotlight Engine */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 mix-blend-screen"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.12), rgba(34, 211, 238, 0.04), transparent 80%)`
          }}
        ></div>

        {/* Dynamic Secondary Cosmic Energy Orb */}
        <div 
          className="absolute pointer-events-none w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-[4000ms] ease-out hidden md:block"
          style={{
            transform: `translate(calc(var(--mouse-x, 50%) * 0.15 - 150px), calc(var(--mouse-y, 50%) * 0.15 - 150px))`
          }}
        ></div>

        {/* Crazy Cyber-Console Main Card Wrapper - Changed max-w-2xl to max-w-xl for compact width */}
        <div className="w-full max-w-xl mx-auto backdrop-blur-3xl bg-white/[0.01] border border-white/[0.04] shadow-[0_35px_80px_rgba(0,0,0,0.9)] rounded-3xl relative z-10 duration-500 group/card hover:border-cyan-500/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)] overflow-hidden">
            
            {/* Top Sleek Control Bar (Scifi Terminal Details) */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.04] bg-white/[0.02] text-[10px] font-mono tracking-widest text-white/30 select-none">
              <div className="flex items-center gap-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/60"></span>
              </div>
              <div className="font-semibold uppercase text-cyan-400/60 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                Core_System_v2.0
              </div>
              <div className="hidden sm:block">
                STATUS: ACTIVE
              </div>
            </div>

            {/* Inner Content Padding Wrapper */}
            <div className="p-6 md:p-8">
              
              {/* Cyber Gradient Heading */}
              <h1 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent tracking-widest select-none drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] uppercase font-mono">
                System.Todos
              </h1>
              
              <div className="mb-6">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              
              <div className="flex flex-wrap gap-y-3.5 max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
                  {/*Loop and Add TodoItem here */}
                  {/* <TodoItem/> */}
                  {/* yaha ham ab sare todo ka acccess lenge aur uspe loop lagayenge aur then we  */}

                  {todos.map( (todo) => (
                    <div
                      key={todo.id} 
                      className="w-full"
                    >
                      {/* here we just change the html based on the pure todos me se har ek todo ka id le ke aao then  iske ander ham todo item ko call karnege aur uske ander ham props ko pass kar denge todo*/}

                      <TodoItem  todo = {todo}/>
                    </div>
                  ))}
              </div>

            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App