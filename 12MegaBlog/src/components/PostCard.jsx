import React from 'react'
import {Link} from "react-router-dom"
// lets import the appwriteservice kyuki hame id chaiye title chaiye aur featured image bhi chaiye 
import appwriteservice from '../appwrite/config'

// we need the id title and featured image from the appwrite 
// id ka syntax aissa hi hai appwrite me 
function PostCard({$id,title, featuredImage}) {
    //  console.log("featuredImage:", featuredImage);
  return (
    
    <Link
        to={`/post/${$id}`}
    >

        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* yaha pe hamare pass ye iamge hote hai jo ki ham getFilePreview jo property banaye the appwriteme woh se leeayenge aur uss file preview ko call kanre ke liye appwrite hamse ek file id mangata hai toh ham yaha jab uss getfile preview ko call aknrege toh featured image ko pass kar denge kyuki featured image hi hamare pass ek iamge od deta hai 
                // jo getfilepreview hai woh ham fileka url bhejta hai jisse ki ham image ke source me daal denge 
                // featurediamge me hamra iamge nahi hoga balki iamge ka id hota hai jo hame save kate time milta hai  */}
                <img src={appwriteservice.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />

            </div>
            <h2
                className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard   