import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from "../index"
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({post}) {
    // in react hook form we can use watch for conitniouselly wathcing the form and we can set the values in it// and we want the control of a form then we can use the control property in useForm
    // here we can use the title or in any thing we can give the default value empty if the user is first time but what if the user is here to edit then we have to give the previous value
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
            
        },
    })
    


    const navigate = useNavigate()
    const userData = useSelector((state)=> state.user.userData)

    // now we make the function for submit the data 
    const submit = async (data) => {
        // ager hamre pass pahle se hi image tha toh ham wohi image ko layenge aur fir purani image ko delete karnege 
        if(post){
            const file =   data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            // if we have the file then we delete the previous image 
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            // for updating the post we have to give the slug jisse hi ham post ko store kar rahe hai databse me = ost.$id is a slug
            // then we just spread the previous data but overwrite the featured image from currenty uploaded image 
            // so what we do ki ager hamre pass file hai toh abhi ke currenty file ka id ko featured iamge me dal denge aur ager nahi hai toh abhi ke liye undefined kar denge // file ka id is nothing but the image ka id 
            const dbPost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined, 

            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
            // so after we get the dbpost then we navigate the user to post and dbpost ke id pe jo bhi uska slug name hai
        }

        // ager post nahi hai toh
        else{
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file){
                // ager file hai toh 
                const fileId = file.$id
                // hamre pass jo data ke ander featured image ka id update kar do 
                data.featuredImage = fileId
                // then we just sent the property of post
                // ham create post kanrege aur uske ander object bana ke cata ko spreat karna hoga but the main thing is ki ham jab bhi forms banayenge hamare pass kabhi bhi user data nahi hoga 
                // but hamne toh uske ander userid banaya hua hai toh usko toh banana parega
                // so hamne jo userData banya tha usme se id ko ham userid me daal denge
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    // now we make the slugTransform function that is nothign but the change the title into a slug bass jaha jaha soace aayega usko - me convert kar dege 

  return (
    <div>PostForm</div>
  )
}

export default PostForm