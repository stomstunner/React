/* eslint-disable no-useless-catch */
// lets import the conf file
import conf from "../conf/conf.js"

// from appwrite we import the client, account and id 

import { Client, Account, ID } from "appwrite"

// now we make a class Authservices and then we make a object that is authservice in lower case becuase we export the object so on the ussesage time we just have to write the object name then use can use the any funcitionlity of it by using the dot operator 

export class Authservice {
    // ab authservice ke ander hamre pass client aur account aayega but account ke liye hame pahle client banana parega jisko ki ham new client ke hi banayenge 
    // but we want ki jaisse hi hamra client call ho tab hi hamre pass ye project id aur url aaye nahi toh na aayeh

    //ek object banyenge Client se 

    client = new Client();

    // now we only write the varaible name account

    account;

    // lets make the constructor kyuki ham chahate hai ki jaisse hi client call ho tab ye chale 
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // now we initilize the account with the defined way ki jaisse hi ye authService call ho toh pahele constructer se hamre client ka value initilize ho jaye aur thab hahamre account ka value bhi 

        this.account = new Account(this.client);
    }

    // now we make a calss ki ham jaisse hi iss authservice se create account bananana chahate hai toh ham bass appwrite ke fucntion ko call kar denge 
    // kyuki ham nahi chahate hai ki ham app me har jaagh jaa ke aur apna auth ko change kare ager baad me hame apna appwrite ko chane karna pare toh so we are making a wrapper ki hame nahi pata ki ham nahi pata ki user account kaisse banana hai ham basss ye class ko call kar denge ye bana dega .. under the hood ye kya backend use kar rha hai usse ham change kar sakte hai futer me 

    // so hame bass ye auth service ke class me createAccount me data pass kar dena hai aur account ban jata hai 

    // so for making we have to destructure ki hamne bass object chaiye 

    async createAccount({email, password, name} ){
        try {
            // now we use the await me account createion method
            // and we need the id.unique in first place 
           const userAccount =  await this.account.create(ID.unique(), email, password, name);

           // now we check ki hamra useraccount hai ya nahi ager hai ban gaya hai toh ham login direct karwa denge  ager nahi hai toh retun kar denge  

           if(userAccount){
            // hamne yahi calss me do property banaya tha create account and login so hamrara ager account ban gaya hai toh direct ham usse login pe daal denge uske liye ham return kar denge this.login({email, password})
            return this.login({email, password})
           }else return userAccount

        } catch (error) {
            throw error
        }
    }

    // now we make  a login functionality jo ki user se bass email aur password lega 
    // and login karne ke liye hamre pass createEmailSession hota hai 

    // async login ( { email, password}){
    //     try {
    //         // yaha pe ham direct return kar denge hamre jo bhi chiz aayega login session create karne ke baad 

    //         const session =  await  this.account.createEmailSession(email, password)
    //         return session 
    //     } catch (error) {
    //         throw error
    //     }
    // }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error;
        }
    }


    // now we make a method ki jo check kare ki hamra user abhi login hai ya nahi iss session me 

    async getCurrentUser(){
        try {
            return await this.account.get()
            // so hamare pass ye accout.get  kar ke property aathi hai jo ki hamra abhi current status baanta hai 
        } catch (error) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        // yaha try catch ke baar aa ke ham return kar denge null ko kisse ahmra ager abhi kuch nahi aayega account.get se toh null aaeyga hi return toh hoga hi null in try but ager ksis bhi wajah se ahmra try catch me problem aa gai toh bahar ham return kar denge null ko 
        return null;
    }

    // now we make the logout method jisme hame bass session ko delete karna hai 

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }

}

// now hame ye create app me koi cher char nahi karni paregi future me kyuki hame bass consturctor me change kanrna parega bass jiss bhi backend se woh chize initilize hogi woh bass likho but hamra create accout ke liye toh hame hames bass username aur email hi lena aprega 

const authservice = new Authservice()
export default authservice
