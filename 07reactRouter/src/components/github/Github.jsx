import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // now we are using the laoder so we use the hook to get the data from laoder
    const data = useLoaderData()

    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/stomstunner')
    //     .then( response => response.json())
    //     .then((data) => setData(data))

    //     // yaha pe jo hamre pass reponse me data aayah hai json formate me usse ham data me pass kr denge aur data toh hamne pahle se hi use sate me dala hua hai 
    // } , [])
  return (
    <div className='bg-gray-300 py-10 mx-10 flex flex-row justify-center gap-10 rounded-4xl '>
        <img className='rounded-3xl shadow-2xl' src={data.avatar_url} alt="github profile picture" width={200}  />
        <div className=' font-bold flex  flex-col justify-center text-black text-2xl items-center text-center'>
        <h1 className=' text-blue-500'>{data.name}</h1>

        <h1 className=' '>Github Repositories : {data.public_repos}</h1>
        </div>
    </div>
  )
}

export default Github

// we can use the loader in the github page for api calling ki jaisse hi hamra mouse ka cursor github pe jaye toh fetch api chal jaye aur data lana chalu kar de 

// toh uske liye ham    yahi se rsponse ko export kar denge 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/stomstunner')
    return response.json()
    // toh yaha pe ham ek promise return kar rahe hai 
}