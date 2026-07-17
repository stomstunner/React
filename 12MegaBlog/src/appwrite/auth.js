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
        .setProject(conf.appwriteProjectId)

        // now we initilize the account with the defined way ki jaisse hi ye authService call ho toh pahele constructer se hamre client ka value initilize ho jaye aur thab hahamre account ka value bhi 

        this.account = new Account(this.client)
    }

    // now we make a calss ki ham jaisse hi iss authservice se create account bananana chahate hai toh ham bass appwrite ke fucntion ko call kar denge 
    // kyuki ham nahi chahate hai ki ham app me har jaagh jaa ke aur apna auth ko change kare ager baad me hame apna appwrite ko chane karna pare toh so we are making a wrapper ki hame nahi pata ki ham
}

const authservice = new Authservice()
export default authservice
