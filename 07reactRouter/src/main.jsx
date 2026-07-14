import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import Explore from './components/explore/Explore.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// now we make the router 
// this is created by the createBrowserRouter method and it take an array
// and iss array ke ander sare list ko daal denge jo bhi hame list chahiye 

// const router = createBrowserRouter([
//   // so this will be our first object jisme hamra path hoga
//   {
//     path : '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//         // we keep it empty because we want that ki hamnre jab bass slash hi rahe uske aage kuch na rahe toh bhi hamee kuch defualt me dikha jaisse Home page
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactUs",
//         element:<ContactUs/>
//       },
//       {
//         path:"explore",
//         element:<Explore/>
//       }

//     ]
//   }
//   // so path ke ander ham top level entlty de diye then ham element ke ander layout ko denge aur furtrher hame children chiye hoga toh array ke ander ham objects ko pass kar denge
//   // so slash top entity hai aur uske ham ham bass path dete jayega ur element ko add akrte jayenge ki mae ky ky add karna hai 
// ])

// // so eventually router ham bana rahe hai ki hamne apne page pe kaisse kiss path pe jana hai aur usse kya element aayega 


//  we have another ways to write the router 

const router = createBrowserRouter(
  // we can direct use the router tag and uake adner ham nesting bhi kar sakte haia nd uske ander hi ham path and element bhi de sakte hai 
 // and iske liye hame createRoutesfromElelemt ka use karna hoga 

  createRoutesFromElements(
    <Route path='/' element= {<Layout/>} >
      <Route path='' element= {<Home/>}  />
      <Route path='about' element = {<About/>} />
      <Route path='contactUs' element = {<ContactUs/>} />
      <Route path='explore' element = {<Explore/>} />
      <Route path='user/:userid' element= {<User/>} />
      <Route 
      // we can use loader also to load the data from api calling 
      loader = {githubInfoLoader}
      path= 'github' 
      element= {<Github/>}
      />
    </Route>
  )
)
{/* yaha pe ham jo bhi chix user: colon ke baad denge usse hi hame user .jsx me bhi use karna hoga isse fetch kanre ke liye kyuki ye ek type ka url ke parameter ko uthatha hai toh ham usePram ka use kar sakte hai  */}
// now we add the route for github componets also

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* here we use the routerProvider and uske ander router ko pass kar denge  */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
