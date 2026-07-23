import React, { useState } from 'react'
import appwriteServices  from '../appwrite/config'
import { Container, PostCard } from '../components' 


function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteServices.getPosts([])
    .then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

    // now we check the length of posts 
    if(posts === 0){

        return (
            <div
                className='w-full py-8 mt-4 text-center '
            >
                <Container>
                    <div
                        className='flex flex-wrap'
                    >
                        <div
                            className='p-2 w-full '
                        >
                            <h1
                                className='text-2xl font-bold hover:text-gray-500 '
                            >
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    // if we have any posts then we show like this 
    return (
        <div className='w-full py-8 '>
            <Container>
                <div
                    className='flex flex-wrap'
                >
                    {posts.map((post) => (
                        <div 
                            key={post.$id} 
                            className='p-2 w-1/4'
                        >
                            <PostCard {...post}/>
                            {/* we can here write as post={post} , but here we jsut spread the all posts */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home