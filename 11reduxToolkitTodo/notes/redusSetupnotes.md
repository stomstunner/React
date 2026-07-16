## so store banane ke liye ham sabse pahle congigureStore ko laate hai reduxjs/toolkit se jo hamne intall kiya tha 

`import {congigureStore} from '@reduxjs/toolkit'; `

## then we make the store from configureStore and export the store 

`export const = configureStore({})`

ye object hi leta hai 

----

// now we make the reducers 
// for this we make a feature section and uske hamahre pass further bahut sare features ho sakte hai toh usje ander ham todo naam ka folder banayenge then uske ander hai todoSlice naam se ek file baanayenge

// and then we make the slice with the help of create slice method  and further we need a unique id so we use the nanoid for that 

// and we make a initial state for store ki starting me store kaissa dikhega 
so ham initial state me kuch bhi rekh sakhte hai like array , object => so we put object because further ham uske ander baaki chize rakh sate hai

// iske ander ham ek todos naam ka state banayenge jiske ander toh array hoga aur array ke adner multiple object aayenge
// and iss todos toh array hai uske ander object hai aur uss objecte ke ander ham id and text baan dete hai  and ha todos ke alawa further hamare pass bahut sare property ho sakte hai 

// then we export the todoSlice jo ki banta hai create slice se aur uske ander hamra 1 naam hoga aur 1 initial state hoga

// and uske ander ham banate hai reducers jo ki hota hai bass ek fucntion
// jiske adner aati hai hamre pass property and fucntion aur reducers hamra ek object hota hai 
// aur jo ham property likhnte hai jaisse ki `addTodo` toh woh hamra ek fucntion ko rakhta hai ham usme bass fucntion ka naam bhi likh sakte hai bass naam not calling/ and bass woh direct callback function bhi likh sakte hai    


# at the end we have to export the addtods and store so we can do that in app.jsx also and main.jsx also but we have to import provider for that .. for that we use the provider from the react redux

// but usse pahle hame app.jsx me jaa ke addtos and todos ko ko palace karna parega