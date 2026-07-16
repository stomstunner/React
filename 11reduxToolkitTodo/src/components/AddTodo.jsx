import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

// now we take the individual property from the todoSlice
import {  addTodo, updateTodo, removeTodo} from "../features/todo/TodoSlice";

function AddTodo() {

    // we make the hook for staging of the input  
    const [input,setInput]  = useState()

    // ab ham dispatch banayenge jo ki hamare data ko reducer tak bhejega
    const dispatch = useDispatch();

    // now we make the fucntion addtodohandler jo ki dispkath ka use kar ke reduscer tak jata hai aur then store me changeses karta hai  

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        // so ham direct hi dspatch ko call kar denge aur usme hamre fucntion ko call kar denge addtodo and jo hamra addtodo hai woh kuch action.payload as a in put lega 
        // so ham direct hi input send kar denge

        // and at the last ham input field ko empty kar denage
        setInput('')
    }

  return (
    // Integrated layout to seamlessly stack on top of the main core dashboard panel
    <form onSubmit={addTodoHandler} className="flex items-center w-full max-w-xl font-mono mb-4">
      <input
        type="text"
        className="bg-[#0d1527]/40 border border-zinc-800 focus:border-cyan-500/50 text-zinc-300 placeholder-[#334155] rounded-l-xl py-3.5 px-5 w-full outline-none text-sm transition-all duration-200"
        placeholder="Initialize new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#0d1527]/40 text-zinc-500 hover:text-cyan-400 font-bold uppercase tracking-widest text-xs border border-l-0 border-zinc-800 focus:border-cyan-500/50 hover:bg-[#111b32]/50 rounded-r-xl py-[18px] px-6 outline-none transition-all duration-200 shrink-0"
      >
        ADD
      </button>
    </form>
  )
}

export default AddTodo