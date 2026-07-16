// here we mske the sore with the help of configurestore  
import {configureStore} from '@reduxjs/toolkit'
// hamare store ko bass todoreducer ka knowledge chaihiye
import todoReducer from '../features/todo/TodoSlice'


export const store = configureStore({
    // yaha ham ek object denge 
    reducer:todoReducer

})
// herllo mere bhai tera kya haal hai 
