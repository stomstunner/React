// here we make the contex for the todo context api
//sabse pahle hame create contatext and use contaxt ka use karna parega 

import { useContext, createContext } from "react";

// create context 

export const TodoContext = createContext({
    // here we have the array named todo jisme ki ham object ko add karte jaisse jaisse hamare pass todo badhta rahega ...pahle toh ye empty hi rahega but later on ye bharta rahega  

    todos:[
        {
            // yaha ham bass model yaad rakhne ke liye bana rahe hai ki kya kya hoga todo me jisse ham global context me rakhna chahate hai 
            id: 1,
            todo: "Todo Msg",
            completed : false
        },
    ] ,
    // ye todos hamra propertyr hai jaisse ki hamre pass theme me dark paroperty tha but yaha pe hamre pass array hai

    // and ham yaha pe functionality ko bhi bana sakte hai but woh empty hota hai aur usko define ham woh karte hai jaha use ho rha ho // we do not write her just the name 

    // hamre pass addTodo ka functionality define karte hai jisko ki bass to chaiye wohi masage jisse hamra todo add hojayega

    addTodo:(todo)=>{},

    // now we have updatetodo jo ki update karega todomassage ko iske liye ham id lenge aur todo lenge ki kisko hame update karna hai aur kya update karna hai 
    updateTodo: (id, todo) => {},

    // now for the delete todo we only pass the id 

    deleteTodo: (id) => {},

    // and for the toggleCopmlete / maltab ki todocomplete hone ke liye kya chaiye 

    toggleComplete: (id ) => {} 


})
// create context me 

// export the useContext as a varibale 
export const useTodo = ()=>{
    // re useTodo ye function hai jo ki hamra  usecontext ko return karega so ham app me direct hi useTodo ka use kar sakte hai hame woaha pe useContext ka use na karna pare bass ham ye varibale ka hi use kar le aur kaam ho jayega 
    return useContext(TodoContext)
    // usecontext ke ander hamesha ham ek todoContext dete hai 
}

// export todoProvider
export const TodoProvider = TodoContext.Provider