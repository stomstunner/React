import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
// store me sabse pahle ham configstore ko laao toolkit se 
// then mujhe batao ki mere pass kitna reducders hai uska knowledgd do then 
//store bana ke export kar do 

export const store = configureStore({
    reducer : {  
        auth : authSlice,   
        //TODO: add more slices here for posts
    }
})
