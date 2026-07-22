import React from 'react'
import { Container , PostFrom} from '../components'   


function AddPost() {
  return (
    <div className='py-8'>
{/* wrap with container */}
        <Container>
            <PostFrom/>
        </Container>
    </div>
  )
}

export default AddPost