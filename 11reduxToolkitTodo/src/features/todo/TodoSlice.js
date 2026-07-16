// naming convention me hame slice isliye lagaya hai kyuki ham bass rsdux toolkit ko use kar rahe hai 
// slice matlab hass redux  toolkit me reducer hota hai 


import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"hello world"}]
}

// .. now we make the todoSlice 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        //property
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                text: action.payload
                //#region 
                // so text ke ander ham kuch massage dalenge jo ki hamre pass action se aayege 
                // action ke ander payload object se further ham payload.text kar uska text le sakte hai but hamne key ka naam bhi text hi rakha hai toh ham bass action.payload hi denge
                //#endregion
            }
            // so hamne todo toh banaya hai but usse hame state ke ander toh dalna parega ...like jitne bhi ham todo banate jaa rahe hai unn sabsko ham initalstate ka ander wale todos me toh dalenge
            // so jo hamre pass initialstate me jo chize hai woh hamre state me aati hai 

            state.todos.push(todo)
        },
        //so the main diffrence between context api and redux toolkit ki hamre pass jo ham yah property ko sirf define nahi karte hai usse pura likhta hai uska fucntionality 

        // and we alway 2 chiz ka access rehta hai in propertyme sclice me
        // 1st chix hai slice jo ki access deta hai ki hamra current initial state me kya kyc chize hai unn sab ka access degi
        // action hame kuch values deti hai jo ki jaruari hota hai property ko run karne ke liye jaisse ki id ,, action is like a event 

        // now we make the todo in addtodo 
        // toh usme bass hamne jo intial state me jo chiz dali thi wohi daal denge bass id ke place pe nanoid denege


        // state me hamare pass current state milta hai aur action me hamre apss jo data beja hai woha ata hai 
        removeTodo : (state, action) => {
            //  iske ander ham todos ke state me ham rakhen todos ke state ko hi but usme ek filter laganege ki tum har ek todo ko toh lo but usme se jo action.payload se id aaye uska mat lenga

            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state,action)=> {
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text : action.payload.text} : todo)
        }
    }
})



// now we individually export the funcitionality  from reducers 
// kyuki hamre components me kaam aayeg
export const {addTodo,removeTodo,updateTodo } = todoSlice.actions


// and hamre jo store hai un sabko bhi awwarness chaiye innsaro reducers ke baare me 
// kyuki store hamre pass ek restrictive zone hai ji ki saro se values le ke update nahi karta hai jo jo reducers registers hai unka hi value ko leta hai aur aur value ko update karta hai

export default todoSlice.reducer