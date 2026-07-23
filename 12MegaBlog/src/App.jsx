import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'
import { useEffect } from 'react'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  //#region here we use the a state for loading like ham jab bhi data ko app me load karwaynege toh ek loading state rakhenge ager loading ho rha hai toh render mat karo aur ager load ho gaya hai toh render kar do // conditional rendering

  const [loading, setLoading] = useState(true);

  // data bejne ke liye ham useDispatch ka use karenge
  const dispatch = useDispatch();

  // now use use the useEffect ki jaisse hi hamra load ho jaye toh ek service lenge authService se ki ham abhi login hai ya nahi 
  useEffect( () => {
    // jaisse hi ham yaha aayenge ham puchenge ki hamra current user kaun hai 
    // ham authService ke ander jaa ke ek method tha getCurrentUser usse hamara user de deha nahi hoga toh nahi dega 

    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
        // dispatch ke adner ham login ko pass karnege jiske ander hoga hamra user data object me
      }else{
        // so ham else me ager userdata nahi mila hai toh ham diaptch kar denge logout ko .. kyuki ham chahate hai ki jaisse hi hamra page load ho toh use effect ki help se ham hamesha apna state update rakhe ki ager userdata hai toh login karo nahi hai toh logout rakho 
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
    // and finally me ham setLoading ko false akr denge ki harma sara kaam ho gaya hai 

    // ager hame successfully uer mil gaya {then}
    // ham kya kanrnege aur finally ham ky karnge 
    // // finally toh hamesha hi chalega 
    // ## at the last then me hame call back milta hi hai toh hame currentuser se jo data milega usse ham userData bol denge 
    // then ham uss data ko dispatch karenge payload me 
    // toh ham dispatch karenge ki ager userdata hai toh dispatch karenge ager nahi hai toh
    // hame diaptch kanre ke lye woh method chaiye login aur logoaut wala
  }, [])

  // at the last we return something like ager hamra loding nahi hai toh kuch return karnege aur aur loadin hai toh kcuh return karnege 
  return !loading ?  (
  <div className='flex min-h-screen bg-gray-300 flex-wrap  content-between'>
    <div className='w-full block'>
      <Header/>
      {/* ab ham header aur footer ke ander ham kcuh bhi componets diaplay karwa sakte hai isko outlet bol dete hai  */}
      <main>
      {/* //TODO:  */}
      <Outlet/>

      </main>
      <Footer/>
    </div>  
  </div>
) : null
}

export default App
