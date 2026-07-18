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

