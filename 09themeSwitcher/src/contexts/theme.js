// so here we make the context 
import {useContext, createContext} from 'react'

export const ThemeContext = createContext({
    // ham iske ander kuch default value de dete hai jisse jab bhi user isska use kare toh koi pahle se context ho// ye ek object hai   
    themeMode: "light",
    darkTheme :  ()=>{},
    lightTheme :  ()=>{}
    // so ham createContext ke ander ham variable bhi desakte hai aur methode bhi de sakte hai 
    // isse hoga kya ki jab bhi ham themeContext ko call karnege toh hame varibale + method ka access milega 
})

//so ham yahi se themeprovider ko export kar denge 
export const ThemeProvider = ThemeContext.Provider

// now we export the useTheme hook jisse ham themecontex ko use kar paye 
export default function useTheme () {
    return useContext(ThemeContext)
    
}