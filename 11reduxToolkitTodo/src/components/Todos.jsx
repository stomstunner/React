import React, { useState } from 'react' // Humne yahan useState ko add kiya taaki local states use ho sakein
// now we import useSelector fo taking the data  from state and usedispatch for sending the data like we have to remove the inidiual todos 
import { useSelector, useDispatch } from 'react-redux'

// and we import the functionality from todoslice 
import { removeTodo, updateTodo } from '../features/todo/TodoSlice'

{/* //#region  now we have the whole todos toh ham uspe loop lage denge aur usse show kar denge yaha todo me uske liye ham ek ek todo ko lenge aur usje id jo ki hamra html me key me jayega uske help se hai list karenge aur sabse pahale ham todo ka text likhenge aur last me uss pe ek button bhi laga denge aur uss button ke ek property laga denge onclick ka ki jaisse hi click hoye hama dispatch run hoye aur hamra reducerse se setore me jaa ke remove todo function chal jaye 
// #endregion  */} 
// so todos jo hamare pass aaya uske ander hai todos state se aaya hua jo ki hai ek array of object jispe ham loop laga sakte hai
// now we use the useselector  jo ki ek fuction ko leta hai aur hame chaiye state aur state me bhi state ke ander se initialState se 
// so we want ki jaisse hi hamra onclick chale hamra dispatch ke ander se removetodo chal jaye but ham dispatch fuction ko call nahi kar sakte hai bass uska refrence denge 

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // for updation of itmes or todo uske liye ham editTodoid banayenge jo ki local me yaad rkaega ki ham kisko update karna chahte hai aur hamre
    const [editTodoId, setEditTodoId] = useState(null) 
    const [editText, setEditText] = useState('')

    const handleEditClick = (todo)=>{
        setEditTodoId(todo.id)
        setEditText(todo.text)
    }

    const handleSaveClick = (id)=>{
        if (editText.trim() === '') return
        // dsiapatch karo 
        dispatch(updateTodo({id:id, text: editText}))

        setEditTodoId(null)
        setEditText('')
    }

  return (
    // Super-slick dark frosted card terminal window interface wrapper
    <div className="w-full max-w-xl bg-gradient-to-b from-[#0e1524] to-[#070b14] border border-zinc-800/80 rounded-2xl p-6 font-mono shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl relative overflow-hidden ring-1 ring-white/5">
      
      {/* OS Mac style simulated window control bar header */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-900 pb-4 text-[10px] tracking-widest text-[#475569] font-bold select-none">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20"></span>
        </div>
        <div className="text-cyan-400/60 uppercase text-[9px] tracking-[0.25em]">CORE_SYSTEM_V2.0</div>
        <div className="uppercase text-[9px]">STATUS: <span className="text-emerald-400">ACTIVE</span></div>
      </div>

      {/* Cyberpunk centered title with customized wide tracking text-glow */}
      <div className="text-center text-[#c084fc] font-extrabold text-2xl tracking-[0.3em] mb-6 drop-shadow-[0_0_15px_rgba(192,132,252,0.2)] uppercase select-none">
        SYSTEM.TODOS
      </div>
    
      <ul className="list-none w-full space-y-3">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-[#0d1527]/40 border border-zinc-800/50 px-5 py-3.5 rounded-xl hover:bg-[#111b32]/50 hover:border-zinc-700/50 transition-all duration-200 shadow-md group"
            key={todo.id}
          >
            {editTodoId === todo.id
            
            ? 
            
            (// Agar edit mode ON hai, toh Input box dikhao
                            <input
                                type="text"
                                className="bg-[#070b14] text-white px-3 py-1 rounded-lg outline-none w-full mr-4 border border-cyan-500/60 font-medium text-sm"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />) 
                            
            :
                       (
                            // Agar edit mode OFF hai, toh normal text dikhao with decorative checkbox
                            <div className="flex items-center space-x-3 max-w-[70%]">
                              <span className="w-3.5 h-3.5 rounded border border-zinc-700 block shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"></span>
                              <div className='text-zinc-300 tracking-wide text-sm font-medium truncate'>{todo.text}</div>
                            </div>
                        )     

                            }

            {/* Hamne niche se ek extra double text display hataya aur uski jagah controls ka div banaya */}
            <div className="flex items-center space-x-3 shrink-0">
                
                {/* Agar edit mode active hai toh SAVE dikhao, nahi toh EDIT (✏️) button dikhao */}
                {editTodoId === todo.id ? (
                    <button
                        onClick={() => handleSaveClick(todo.id)}
                        className="text-cyan-400 font-bold py-1 px-3 border border-cyan-500/30 hover:bg-cyan-500/10 rounded-lg text-xs tracking-wider uppercase transition-colors"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => handleEditClick(todo)}
                        className="text-zinc-500 hover:text-cyan-400 transition-colors duration-150 p-1"
                        title="Edit entry"
                    >
                      {/* Image-matching minimal sleek line design pencil */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                    </button>
                )}

                {/* Tumhara original removeTodo delete button re-skinned as an elegant custom 'X' closer */}
                <button
                 onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-zinc-500 hover:text-rose-400 transition-colors duration-150 p-1"
                  title="Terminate entry"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos