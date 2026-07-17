//for making the uthSlice we neet a simple createSlice mehtod from redux toolkit 
import {createSlice} from '@reduxjs/toolkit'

// then we make the initaial state 

// so ye jo slice hai woh bass userAuthenticated hai ya nahi hai woh track karta hai ki mai bass store se puchunga ki user authenticalted hai ya nahi 

const initialState = {
    status: false,
    userData : null
}

// then we crate the slice from create slice jisko ki hame name and intial state dena parta hai aur last me hame reducers dena parta hai jiske ander hame method and property dena parta hai 

const authSlice = createSlice({
    name : "auth",
    initialState,
    // now on reducers ke ander ham individual reducers ko banate like a property jaisse login , logout ,
    // further usme hame 2 chizo ka access milta hai state = jo ki current state ko modify karne me help karta hai ya usse dekhne me and ek hai action se milta hai hame payload
    //     Action ek object hota hai jo reducer ko batata hai:
    // payload = Wo data jo dispatch() se reducer tak bheja jata hai.
    
    // "Kya kaam karna hai aur uske saath kaunsa data bhejna hai."

    reducers: {
        login : (state, action)=>{
            // so ajisse hi kisi se login method ko use kiya toh sabse pahle hame statte me chizo ko update karna parega 
            // initial state me hamare pass status and userdata hai 
            state.status = true;
            // ye true hame bata raha hai ki ham abhi login hai 
            state.userData = action.payload.userData;   

        },

        // waisse hi ham ek aur method bana sakte hai logout ka jisme hame bass state ka acess chaiye aur ham state.status ko flase kar denge 

        logout : (state) => {
            state.status = false;
        }


    }
})

// at the last hame authSlice me se reducers ko export toh karna hi parta hai but hame individual reducers ko bhi export karna parta hai easy access ke liye 

export const {login, logout} = authSlice.actions;
// actions isliye kyuki ham ho authslicers ke nadeer reducers ke ander jo peoperty banate hai usse actions bolte hai    


export default authSlice.reducer;