import React from 'react'


// children is nothing but the text / jo button ka naam hoga , here we are writing the props and default parameters in them 

// so we are seeing ki hamre pass classame toh empty hai but fir props bhi hai spered form me //iska matlab hai ki ham kuch user se  aur parameter le sakte hai 
// and hamre pass button ke ander bahu sare aur property ho sakte hai jaisse onclick ya kuch bhi toh uusko ham ...props me le ke spread kar diye hai 
// but usse hame bahr likhna parega classnme ke abhar kyuki classname me toh ham css likh rahe hai 
function Button({
    
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = "text-white",
    className = "",
    ...props

}) {

 
  return (
    //#region 
    // here we do not write like a classname = ""
    // hamko yaha backit use karna parega but ham javascript toh yaha use nahi kar sakte hai uske liye hame currey bracket use karna parega      
    // alos we want ki koi classname user bhi pass akr de thats why we kept the clasname empty 
    // so we can just use the ${variable}
    //#endregion
    <button className={`px-4 py-2 rounded-2xl ${className}  ${bgColor} ${textColor}`}
    
    {...props}
    
      
    >
        {children}
    </button>
  )
}

export default Button