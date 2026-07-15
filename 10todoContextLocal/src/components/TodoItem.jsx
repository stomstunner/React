import React, {useState} from 'react'
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
    // so yaha hame todos ko destructure kar liye hai
    // jo pura object mil raha tha usko hamne todo bol diya 
    
    // now we want the context for changees in the todoitems
    const { deleteTodo, updateTodo, toggleComplete} = useTodo()

    // now we want a state ki todo hamra editable hai ya nahi hai
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [ todoMsg, setTodoMsg] = useState(todo.todo)
    //#region 
    // so ham yaha pe jo ek single single todo mil raha tha jo ki kuch niche jaissa dikhta hai aur uske ander ke msg wlae todo ko access karna chahate hai 
    //   {
    //         id: 1,
    //         todo: "Todo Msg",
    //         conmpleted : false
    //     },
    //#endregion

  // now we make the edit todo jisme ki ham todo ko edit kanre ke bare me dkenge 
    const editTodo = () => {
        // ab isme ham update todo ko call karenge kyuki eventually ham todo ko update hi toh kar rahe hai 

        // toh usme hame id dena hoga aur pura todo hi dena hoga 
        // pura todo to denge but ham kya update karna chahae hai bass uske ander ke strign ko toh ham bass sare chix ko same rakhenge aur bass todo ko overrite kar denge apne todoMsg se
        updateTodo(todo.id, {...todo, todo : todoMsg})
        //  and now we set the editable ki ab hamra todo edit ho gaya hai toh usko ham flase kar dege 

        setIsTodoEditable(false)
    }

    // now we create this method for togglecomledted 
    const toggleCompleted = ()=>{
        // now we have the togglecomple from the contex usko call karnege 
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center group relative gap-x-3 rounded-xl px-4 py-3.5 duration-500 transition-all ease-out backdrop-blur-xl border ${
                todo.completed 
                    ? "bg-emerald-500/5 border-emerald-500/20 opacity-60 shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
                    : "bg-white/[0.02] border-white/[0.06] hover:border-transparent shadow-lg shadow-black/10"
            }`}
        >
            {/* Crazy Full Rounded Cyber Glow Border Wrapper */}
            <div 
                className={`absolute inset-0 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none border-[1.5px] ${
                    todo.completed 
                        ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                        : 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                }`}
                style={{ 
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' 
                }}
            ></div>

            <div className="flex items-center gap-x-4 w-full relative z-10">
                {/* Minimalist Neo Checkbox */}
                <div className="relative flex items-center justify-center shrink-0">
                    <input
                        type="checkbox"
                        className="cursor-pointer w-5 h-5 rounded-md appearance-none border border-white/20 checked:border-emerald-500 duration-300 transition-all checked:scale-110 active:scale-95"
                        checked={todo.completed}
                        onChange={toggleCompleted}
                    />
                    {todo.completed && (
                        <svg className="absolute w-3 h-3 text-emerald-400 pointer-events-none animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                
                <input
                    type="text"
                    className={`outline-none w-full bg-transparent font-medium duration-300 tracking-wide ${
                        isTodoEditable 
                            ? "text-cyan-200 border-b border-cyan-500/40 pb-0.5 animate-pulse" 
                            : "border-b border-transparent"
                    } ${todo.completed ? "line-through text-white/30" : "text-white/90"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
            </div>

            {/* Hyper-Minimalist Button Area */}
            <div className="flex items-center gap-x-1.5 relative z-10">
                {/* Edit / Save Button */}
                <button
                    className={`inline-flex w-9 h-9 rounded-lg justify-center items-center shrink-0 disabled:opacity-20 transition-all duration-300 relative group/btn ${
                        todo.completed
                        ? 'text-white/20'
                        : 'text-white/40 hover:text-cyan-400 active:scale-75 hover:scale-110'
                    }`}
                    onClick={() => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? (
                        /* Save/Folder Minimal SVG Icon */
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                        </svg>
                    ) : (
                        /* Pencil Minimal SVG Icon */
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    )}
                </button>

                {/* Delete Button */}
                <button
                    className="inline-flex w-9 h-9 rounded-lg justify-center items-center text-white/40 hover:text-red-400 shrink-0 transition-all duration-300 active:scale-75 hover:scale-110 group/btn"
                    onClick={() => deleteTodo(todo.id)}
                >
                    {/* Cross Minimal SVG Icon */}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;