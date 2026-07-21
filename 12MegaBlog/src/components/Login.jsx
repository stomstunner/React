import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from "../store/authSlice"
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import authservice, { Authservice } from '../appwrite/auth'
 

function Login() {
    // lets use all the imported things 
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    // and the main thing that we use is hook form 
    const {register, handleSubmit} = useForm();
    // for error handling
    const [error, setError] = useState("")

    // now we make the login method // hamne handle submit naam ka method banaya tha but uska usage alag hai 

    // it will be an async function that will recieve the data
    // and the first thing we do is to empty out the all error like if we are submitting the form then it should be ovious ki hamra koi error na bache 
    // then we use the try catch ki hamara data jaa bhi raha hai ya nahi 
    // and in the catch section we use setError  and in setError we send the error massage .. so the error is in the useState , and we cna use the conditional rendering 

    const login = async(data) => {
        setError('')
        try{
            // here we use await because we are using the async function and send the data to the authServide.login and usse jo bhi result aayega usse ham session id me daal denge 
            const session  = await authservice.login(data)

            // ager hamra session nikal gaya then hamra user login hai 
            // then we find the userData from the authService feom the get user 
            // we are using the getcurrent user method for finding the current user data so we have to use the await

            if(session){
                const userData = await authservice.getCurrentUser()

                // if we get the userData then we have the user so userData ko dispatch kar do authLogin// login from store / authSlice 
                // and then nagivate the user to home page or root page  
                if(userData){
                    dispatch(authLogin(userData));
                }
                // so if we are using the link then we have to write the clickable system but through navigate we can navigate programibilly
                navigate("/");
            }
        }catch(error){
            setError(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div
                    className='mb-2 flex justify-center'
                >
                    <span 
                        className='inline-block w-full max-w-25'
                    >
                        <Logo width='100%'/>

                    </span>
                </div>
                <h2
                    className='text-center text-2xl font-bold leading-tight'
                >
                    Sign in to your account
                </h2>
                <p
                    className='mt-2 text-center text-base text-black/60'
                >
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className='font-medium text-pretty transition-all duration-200 hover:underline '
                    >
                        Sign Up
                    </Link>
                </p>
                {/* now we want to display the error if found */}

                {error &&  <p
                                className='text-red-600 mt-8 text-center '
                            >
                                {error}
                            </p>
                }
                {/* now the main thing is form  */}
                <form 
                // inside the onsubmit in the from we give the handlesubmit that is a method and use ander ham apna method ko likhte hai ki hame ye method ko call reference dena hai 
                // so handle submit ham isliye use karte hai kyuki register me jo values hoti hai uske values ko hame state change karna nahi parta hai woh khud yaha se le leta hai //handleubmit is like a event aur woh ek keyword hota hai useform me state manage ke liye 
                    onSubmit={handleSubmit(login)}
                    className='mt-8'
                >
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder = "Enter your email"
                            type="email"
                            {...register("email",{
                                required:true,
                                validate:{
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test (value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                            // in register we use it like a spread ki uske ander jo bhi data hai usko spread kar do aur then uske as a method treate karo jike ander uska(key and object dete hai {objectmann karte toh pass kar sakte hai}) naam likho and object jisme ham property or vilidation de sakte hai like required  , validate etc 
                        />
                        {/* custom input field password */}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password",{
                                required:true,
                            })}

                        />
                        {/* now we can put the cutom design button */}
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login








