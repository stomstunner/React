import React,{useId} from 'react'

function Select({
    // yaha pe ham kya kya lenge selcet use akrnge ke liye 
    label,
    options,
    // options is for ki kya kya ham option dena chahate hai suer ko ham woh yaha pass karo aur wohi display pe dikha do 
    className="",
    ...props
},ref) {

    const id = useId();


  return (
    <div className='w-full'>
        {label && <label
                    htmlFor={id}
                    className=''
                    >
            
            </label>
        }
        {/* now we need a select element  */}
        <select 
            {...props}
            id= {id}
            ref = {ref}
            className= {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* options hame loop karna parega  */}
            {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}


// hame forwardRef me wrap karna parta hai sari chizo ko isliye ham export karte time hi wrap kar denge
export default React.forwardRef(Select)   