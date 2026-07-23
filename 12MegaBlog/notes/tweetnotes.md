## so what we need to develop this project 
// for backend we use the
## appwrite 
// jo ki puri trah se open source hai /
// toh baad me ham sara project ko download kar ke deploy bhi kar sakte hai 

## tinymce
// we use tiny mce for giveing a text editor so we can customize our text

## react hook forms
// we use the reacthook forms for form related hook kyuki ye hame real time state change karne ka feature deta hai


# FLOW

##  create the project with vite
``` jsx
 npm create  vite@latest

> npx
> create-vite

│
◇  Project name:
│  12MegaBlog
│
◇  Package name:
│  12megablog
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start 
│  now?
│  Yes
│
◇  Scaffolding project in C:\Users\ujjwal kumar\Desktop\React\12MegaBlog...
│
◇  Installing dependencies with npm.

```

----
 ## then we install the redux toolkit for centralize single source on storage 

`npm install @reduxjs/toolkit
`
## and the react-redux libery

`npm install react-redux
`

---
## and we need react router dom

` npm install react-router-dom`

---

## then we need the appwrite .. kyuki ager install rahega toh calling akrna easy rehange

`npm install appwrite`

----

## then we install the tinymcv hamre visual code/text editor ke liye 

`npm install @tinymce/tinymce-react`

---

## then we install the html react parser becaue we are storing the text in html in our databse

` npm install html-react-parser `

--- 

## then we install the react hook form for live state changeing 

` npm install react-hook-form `


---
## now we make the evironment varibale file isme hamre sare secret chize hoti hai password and all

## isko banane ke liye hame hamesaha .env likhna parta hai aur usse .gitignore me daal dete hai taki ham ye file kisi ko na dikhaye 

# .env file hameasha hamre root folder me hota hai jaha pe readme.md file hoga like

## so we  are making the app with the help of vite so we have to use the storing of varibale like keys or databse password in some specfic way 

##  if we want to store some secret key then we have to write 

# VITE_SOME_SECRETE_KEY = 'jsvjksd'

# DB_PASSWORD = nsnvjsnlvn

## toh ager hame ye secret key aur password ko access karna hai toh uske liye bhi hamre pass kuch method hote hai 

# `import.meta.env.VITE_SOME_KEY` // iska answer hamre pass toh  aa jayega but 
# `import.meta.env.DB_PASSWORD ` // iska answer undefined hi print hoga 

---
# now the important chix ki ham databse banayenge usak id copy paset karne .env me then ham usme table create karenge aur uska is bhi paste karnege hamre .env me then ham jo table bana hua hai uske ander jaayenge aur 

## aur setting me jaa ke permissions ko eanbale karenge users ke liye

## in the articles table we make these coloumns banayenge 
![alt text](image.png)

## then we create a index

----
 # then we go the storeage section create bucket for our image

---
## now we make the a folder jaha pe ham apna sara secret chiz rakhenge kyuki kai baar .env file se woh load hi nahi karta hai 


----

## now we make the a folder jiska naam hoga servises jimse ham appwrite ki sari services hogi jaisse auth aur uske ander ham fir ek file banayenge jiska naam hoga auth.js jisme ham 
## conf file se conf fucntion ko layenge sabse pahle kyuki ham project is aur appwrite url chaiye hoga aur fir woh dene ke baad hamne jab bhi koi user create karna hoga toh 

## ham appwrite se client,accoutnt and id ko le aaynge aur fir client banayenge ek class jisme ham setendpoint and setproject me url and project id denge then ham uss client ki help se account banayenge jo ki ek class hi hoga 

## then we can make the user account.create , jisme hame id toh milega hi apprite se aur bass email aur password dalna rahega

----

## now we make the services for storange and jo ham datebase use kar rahe hai image dalne ke liye

----

```js
 async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            // here we return in await hamra ek created post jo ki hamra return karega databse se createDocument ka use kar ke 
            return await this.databses.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,    
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
                // then at the last hame ky ky save karna hai usse likhnge 
            )
            // iske ander hame tin chize toh sequence me deni hi hai sabse pahle databaseid then, collection id , uinque id or document id 
        } catch (error) {
            throw error
        }
    }

    // lets create a method for update the post 
    async updatePost( slug, {title , featuredImage, content, status}){
        try {
            // here we write ki ham ky kya update karne ke baad return karenge ui pe 
            return await 
        } catch (error) {
            throw error 
        }
    }
```

----
# for upload the file
```js
async uploadFile(file){
        try {
            // yaha pe ham return kar denge sari vlaues ko 
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            // createFile me hame bass bucket id and unique id and jo hamne file liya tha usi ko daal denge aur isse ciz dalne ke baad jo hame chize return me milega usse ham koi varibale ma naa daal ke direct return kar denge jisse ki ham baad me use kar sakte hai 
        } catch (error) {
            throw error
        }
    }
```

---
# redux store folder banayenge aur uske ander store.js file 

---
# then we make the feature or sliceses jo ki kuch nahi bass fucntions hote hai jo ki reducers ko rakhta hai apne pass aur store se baat karta hai 
## slice is nothing but a part of store jo ki apna ek seperate kaan karta hai uske ander hote hai reducers ko ki ek fucntion hote hai data update karne ke liye 

---

## now we make the componets like header and footer export them through a index.js file

----

## now we make the container jiske ander ham bass ek container banayenge jo ki bass kind of wrapper hoga jo as it is apni vlaues ko displays karwa dega 
// linke ham input filed ke har ek field ko alag alag nahi banayenge bass usi ko as a components bana denge 

---
## then we add the code for footer and import the links and for logo setion we make a componets because we can reuse that componets 
// jo ki bass we property ko le sakta hai like width=100px  
and ham bass uss logo ko return kar denge 

---
## the header section is quite  intresting ki ham bass unhi ko logout buton dikhayenge jo login hai aur aur jo login nahi hai unko login button dikhayenge  
## so uske liye ham componetns ke adner hi logoutbtn naam ka components banayenge 

---
## now we make a common button jisse ki ham har jagha use karnege as a componets jo ki bass ek text accept kaerge jisse ham children bol denge 

--- 
## now we make a input file jisme ki ham refrence lenge hamre input field ka kyuki ham sare jahaha ek same hi input field daal rahe hai toh hame pass koi refrence hona chiaye

## so ham ek hi input field har jagah use karene toh ager ham usse login me ya kahi aur bhi use kar rahe hai toh uska hame refrence dena parega thats why we are using the forward ref 

---
## now we make the Select file jisme just ham woh component banayenge jo ham post ke ander jaa ke select karnte hai na ki active hai ya nahi hai 

---

## now we make the componets of card jike ander hme data dikhta hai aur uspe click karne se ek window open ho jata hai 

--- 
## now we make the login form with the use of react hook form

## register and handle submit is a event and make the data object 

```jsx
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
    const [error, setError] = useState()

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
                                    matchPatern: (value) => /^\w+( [ .- ]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test (value) ||
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
```

----

## after the login component we make the signup componet 

---

## then we make the authLayout for protect purpose

----

## now we make our own RTE real time editor with the help of tinymce

## if we want to make the editior using only editor then we can do that like this  

```jsx
import React from 'react'
// importing the editior from the tinymce / tinymvcereact

import {Editor} from '@tinymce/tinymce-react'


export default function RTE() {
  return (
    <Editor
        // we have to write some property along with it 
        initialValue='default value'
        init={
            {branding: false,
                height: 500,
                menubar: true,
                // we can write the plugings that we want to give 
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help '
            }
        }
    />
  )
}

```

---
## after writing the RTE we make a post form folder and inside it we make the post form file in `components`


----

> Ye notes maine project banate time banaye hain taaki future me same galti dubara na karu.

---

# 1. Appwrite Login Issue

## Problem

Login nahi ho raha tha.

Error aa raha tha ki:

```js
createEmailSession is not a function
```

## Reason

Main latest Appwrite SDK use kar raha tha (`appwrite@26.2.0`) aur Hitesh sir ka tutorial purane SDK pe tha.

## Wrong

```js
this.account.createEmailSession(email, password)
```

## Correct

```js
this.account.createEmailPasswordSession(email, password)
```

### Lesson

⚠️ Kabhi bhi tutorial blindly mat follow karo.

Pehle check karo:

```bash
npm list appwrite
```

Agar SDK latest hai aur tutorial purana hai to documentation bhi check karni chahiye.

---

# 2. Signup Button Click hi nahi ho raha tha

## Reason

Password register hi nahi hua tha.

Galti:

```jsx
{...register("password"), {
    required: true
}}
```

Sahi:

```jsx
{...register("password", {
    required: true
})}
```

### Lesson

`register()` ke andar hi validation object pass hota hai.

Ek comma ki galti pura form tod sakti hai. 😭

---

# 3. Home Page pe hamesha

```
Login to read posts
```

hi aa raha tha.

## Reason

Array ko number se compare kar diya tha.

Wrong

```js
if(posts === 0)
```

Correct

```js
if(posts.length === 0)
```

### Lesson

Array check karna ho to hamesha `.length` use karo.

---

# 4. Redux Login State

Page refresh karte hi logout ho ja raha tha.

## Fix

App load hote hi

```js
authService.getCurrentUser()
```

call kiya.

Agar user mila

```js
dispatch(login(userData))
```

warna

```js
dispatch(logout())
```

---

# 5. Missing required attribute "userId"

Error

```
Missing required attribute "userId"
```

## Reason

Database me `userId` required tha lekin createPost ke time send hi nahi kar raha tha.

Fix

```js
const dbPost = await appwriteService.createPost({
    ...data,
    userId: userData.$id,
})
```

### Lesson

Database ka attribute name aur code ka key same hona chahiye.

Ek letter bhi alag hua to Appwrite seedha error de deta hai.

---

# 6. createDocument() Undefined

Error

```
Cannot read properties of undefined (reading 'createDocument')
```

## Reason

Typing mistake 🤡

Wrong

```js
this.databses
```

Correct

```js
this.databases
```

### Lesson

Kabhi kabhi pura bug sirf spelling mistake hota hai.

Console error dhyan se padhna chahiye.

---

# 7. Storage Initialization

Wrong

```js
this.bucket = new Storage(this.bucket)
```

Correct

```js
this.bucket = new Storage(this.client)
```

### Lesson

Storage hamesha Client object se banta hai.

---

# 8. AllPosts Bug

Main aise pass kar raha tha

```jsx
<PostCard post={post}/>
```

Lekin component expect kar raha tha

```jsx
function PostCard({ $id, title, featuredImage })
```

Isliye

```js
featuredImage = undefined
```

ho gaya.

Correct

```jsx
<PostCard {...post}/>
```

### Lesson

Spread operator kab use karna hai ye samajhna bahut important hai.

---

# 9. useEffect Mistake

Main API call bahar likh diya tha.

Wrong

```js
useEffect(()=>{},[])

appwriteService.getPosts()
```

Correct

```js
useEffect(()=>{
    appwriteService.getPosts()
},[])
```

### Lesson

API calls hamesha `useEffect` ke andar.

---

# 10. TinyMCE API Key

Error

```
API key could not be validated
```

## Reason

API key hi nahi dali thi.

Fix

```env
VITE_TINYMCE_API_KEY=xxxxxxxx
```

### Lesson

TinyMCE free hai.

Lekin API key lena compulsory hai.

---

# 11. Image Preview Not Working 🔥

Ye sabse mast debugging thi 😂

## Pehla doubt

- Bucket Permission
- File upload
- Database
- React
- Appwrite

Sab check kiya.

Sab sahi tha.

---

Console me check kiya

```js
console.log(featuredImage)
```

Output

```
6a6210920011921de3de
```

Matlab

✅ Database sahi

Fir

```js
console.log(getFilePreview(...))
```

URL bhi ban raha tha.

Fir check kiya

✅ Storage

✅ Database

✅ Permissions

Sab perfect.

---

## Root Cause

Main latest Appwrite SDK use kar raha tha.

Tutorial purane SDK pe tha.

Old

```js
getFilePreview(fileId)
```

Latest SDK me

```js
getFileView(fileId)
```

use karna pada.

Bas ye change karte hi image aa gayi. 😂

---

# 12. Sabse Important Debugging Rule

Kabhi bhi directly solution mat dhundo.

Step by step check karo.

### Step 1

Console Error padho.

### Step 2

Data aa raha hai ya nahi

```js
console.log()
```

se verify karo.

### Step 3

Database check karo.

### Step 4

Storage check karo.

### Step 5

Permissions check karo.

### Step 6

SDK Version check karo.

```bash
npm list appwrite
```


## TinyMCE API Key Issue

TinyMCE open ho raha tha lekin editor disabled tha aur console me API key validation aur 404 errors aa rahe the. Reason ye tha ki `apiKey=""` tha aur `.env` se API key pass nahi ho rahi thi. Isko fix karne ke liye TinyMCE ki free API key generate ki, `.env` me `VITE_TINYMCE_API_KEY` add ki, `conf.js` me export ki aur RTE component me `apiKey={conf.tinymceApiKey}` use kiya. Iske baad editor aur plugins dono sahi chalne lage.

---

## Storage Initialization Bug

Image upload karte waqt `Cannot read properties of undefined` aa raha tha. Kaafi der baad pata chala ki constructor me galti thi.

Galat:

```js
this.bucket = new Storage(this.bucket)
```

Sahi:

```js
this.bucket = new Storage(this.client)
```

Storage hamesha `Client` object se banta hai, bucket se nahi.

---

## Databases Variable Typo

`createDocument()` undefined aa raha tha. Reason sirf spelling mistake thi.

Galat:

```js
this.databses
```

Sahi:

```js
this.databases
```

Ek choti si typo ki wajah se pura service object hi fail ho gaya.

---

## Missing userId Attribute

Post create karte waqt Appwrite error de raha tha:

```
Missing required attribute "userId"
```

Database me `userId` required tha lekin createPost me send hi nahi ho raha tha. Fix ye tha ki post create karte waqt current logged-in user ka id bhejna tha.

```js
userId: userData.$id
```

Aur createDocument ke object me bhi `userId` include karna tha.

---

## Image Preview Issue

Images bucket me upload ho rahi thi, database me `featuredImage` id bhi save ho rahi thi, lekin UI me preview nahi aa raha tha. Sabse pehle bucket permissions, file security aur database values verify ki. Sab sahi nikla, isliye problem code me thi.

Baad me pata chala ki Appwrite SDK version change hone ki wajah se preview method ka behavior change ho gaya tha.

---

## getFilePreview() vs getFileView()

Mere project me `appwrite@26.x` install tha. Is version me `getFilePreview()` properly work nahi kar raha tha. Service ke andar `getFileView()` use kiya aur UI me koi change nahi karna pada.

Service:

```js
getFilePreview(fileId) {
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    )
}
```

UI:

```jsx
<img src={appwriteService.getFilePreview(featuredImage)} />
```

Service ke andar implementation change karne se poore project me automatically fix ho gaya.

---

## AllPosts Props Issue

`PostCard` component destructuring use kar raha tha.

```jsx
function PostCard({ $id, title, featuredImage })
```

Lekin main props aise bhej raha tha.

```jsx
<PostCard post={post} />
```

Isliye `featuredImage` undefined ho raha tha.

Correct:

```jsx
<PostCard {...post} />
```

Spread operator ki wajah se sari properties direct component ko mil gayi.

---

## Logout Button Bug

Console me error aa raha tha:

```
logout.then is not a function
```

Reason ye tha ki function ko call hi nahi kar raha tha.

Galat:

```js
authService.logout.then(...)
```

Sahi:

```js
await authService.logout();
dispatch(logout());
```

Ya

```js
authService.logout().then(...)
```

Lesson: `.then()` sirf Promise pe lagta hai, function pe nahi.

---

## Redux Refresh Bug

Ye sabse confusing bug tha. Login aur Logout successfully ho raha tha lekin Edit/Delete button tab tak nahi aa raha tha jab tak page manually refresh na karu.

Reason App.jsx me tha.

Galat:

```js
dispatch(login({ userData }))
```

Isse Redux state aise ban rahi thi.

```js
state.auth.userData = {
    userData: { ... }
}
```

Poora project expect kar raha tha.

```js
state.auth.userData.$id
```

Lekin actual structure tha.

```js
state.auth.userData.userData.$id
```

Isi wajah se refresh ke baad hi sab sahi hota tha.

Fix:

```js
dispatch(login(userData))
```

Uske baad Redux state sahi bani aur login/logout ke turant baad Header, Edit button aur Delete button sab instantly update hone lage.

---

## Debugging Process

Har bug me direct code change nahi kiya. Pehle console check kiya, network requests dekhi, Appwrite database verify kiya, bucket verify kiya, Redux state print ki, aur SDK documentation bhi check ki. Kai baar problem backend me lag rahi thi lekin actual issue frontend me nikla aur kai baar frontend sahi tha lekin Appwrite configuration galat thi.

Console debugging bahut useful rahi.

```js
console.log(userData)
console.log(post)
console.log(featuredImage)
console.log(authStatus)
```

Ye logs hi almost har bug ka root cause batane me help kar rahe the.

---
