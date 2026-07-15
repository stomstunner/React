import React,{useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    // now we set the state for the individual todo 
    // it is for the add todo 

    const [todo, setTodo] = useState("")
    // initially ye empy hoga 


    // now we want the addtodo from the TodoContext// but we have give the usecontext for todoContext to the useTodo so ham direct hi useTodo ko lenge aur bolnege ki hame kon si functionality chaiye 

    const {addTodo} = useTodo()

    // now we maek the method for addtodo 
    // ye i think call hoga fucntion se like on change pe 

    const add = (e)=>{
        e.preventDefault()
        // ager hamre pass koi todo nahi hoga toh direct return kar do 

        if(!todo) return

        // ager hamre pass todo hoga toh ham addTodo me value ko call larenge aur uska id set karnege aur uska todo set karege aur uska completed set karenge jo ki aage jaa ke app.jsx me ham uahi sare set kiye hue object ko spred karnege aur bass woh pe sare data ko toh as it is lelenhe but ham woha ek id bhi set kanrege toh hame yah id set karne ka jarurat nahi hai aur hame todo ke ander yahi uper wala todo pass karnege toh jab hamre key aur vlaue dono ka naam same ho toh ham bass todo hi likh sakte hai 


        addTodo({ todo , completed: false })
        // addTodo({id : Date.now(), todo:todo , completed: false })

        // ab ham field ko emepty kar denge 
        setTodo("")
    }

    return (
        <form  
        // mainne bola tha ye add wla method call hoga form ke submition pe 
        onSubmit={add}
        className="flex relative group rounded-xl duration-300 transition-all border border-white/[0.05] bg-white/[0.01] focus-within:border-cyan-500/40 focus-within:bg-white/[0.03] focus-within:shadow-[0_0_20px_rgba(34,211,238,0.15)] overflow-hidden">
            
            {/* Input Left Micro-Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20 group-focus-within:bg-cyan-400 duration-300"></div>

            <input
                type="text"
                placeholder="Initialize new task..."
                className="w-full border-none pl-5 pr-4 outline-none duration-300 bg-transparent text-white placeholder-white/20 py-3 font-mono text-sm tracking-wide focus:placeholder-white/40"
                value={todo}
                // yaha hamare input me jo value aayegi usse hi ham todo bol rahe hai jisme ki hamwaring kar rahe hai uper wlae todo se 
                // and then ham onchange pe ham setTodo ko call karte aur uska vlaue ko late e.target se 

                onChange={(event)=> setTodo(event.target.value)}
            />
            
            <button 
                type="submit" 
                className="px-6 py-3 bg-white/[0.03] hover:bg-cyan-500/10 hover:text-cyan-400 border-l border-white/[0.05] group-focus-within:border-cyan-500/20 text-white/50 group-focus-within:text-white/80 shrink-0 font-mono text-xs uppercase tracking-widest duration-300 active:scale-95 relative overflow-hidden"
            >
                {/* Subtle Button Glow Layer */}
                <span className="absolute inset-0 w-full h-full bg-cyan-400/0 hover:bg-cyan-400/5 transition-all duration-300"></span>
                <span className="relative z-10">Add</span>
            </button>
        </form>
    );
}

export default TodoForm;