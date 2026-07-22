import React,{useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'   

function AllPosts() {
    // use the usestate for posts and setpost then we use a useeffect and the  we use the appwrite service for the getposts if successfulley gained then in then we just set the post 
    const [posts, setPosts] = useState([])
    useEffect(()=>{}, [])
    appwriteService.getPosts([])
    .then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((posts) => (
                    <div 
                        key={posts.$id} 
                        className='p-2 w-1/4'
                    >
                        <PostCard post={posts}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts