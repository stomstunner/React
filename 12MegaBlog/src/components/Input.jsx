import React, {useId} from 'react'
// kabhi kabhi hame id use karna parta hai 

// ham yaha pe forward ref ka use karenge 
// and in the props we have to write the property  and the last we get the refrence 

const Input = React.forwardRef(function Input({
    label,
    type ="text",
    className = "",
    ...props
},ref){

    const id = useId()
    return (
        <div className='w-full'>

            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}
            >
                {label}
                </label>
            }

            {/* now we want the input */}

            <input
            
            type={type}
            className= { ` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}

            ref = {ref}
            {...props}
            id = {id}

            // ref me hame jo user se prop liya hai usse pass kar denge 
            // refrence isliye chaiye kyuki hamara componet alag hai toh usak refrence bhi liya jayega aur state ka access liya jayega
            />
        </div>
    )
})

export default Input