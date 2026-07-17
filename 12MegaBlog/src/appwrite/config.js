// sabse pahle conf ko import karna hai 
/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js'

// import the services we want from appwrite 
import {Client, ID, Databases, Query, Storage} from 'appwrite'

// export the service jisse ham class me banayenge aur last me uske object ko export karenge 

export class Service{
    // now we make the client 
    client = new Client()
    // now we make the variable jisse ki ham cnstructore me initilize karnege
    databses;
    bucket; // name for storage 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        // now hame databse aur bucket hmara hamesha client se hi banta hai 
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.bucket)

    }
    // now in the class we make a method jo ki post create karega

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
            // here we write ki ham ky kya update karne ke baad return karenge UI pe , iske like hame updateDocument ka use karna hai method ko jo ki databseid, then collection id then hamra document id lega, hame slug ko as a doucment id liya hai , usierid ko bhi le sakte hai then , ham return usse ham kya return karne jo ki user ne diya hai naya wla title ager diya hoga to nahi toh purana wala toh hoga hi aur naya content ya featured image ya status ki active hai ya nahi 
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error 
        }
    }

    // now we make the deletedocument feature ki delete karne ke liye kye ky chaiye 
    async deletePost(slug){
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            // now we juct return true and we have to handle the true on front end 
            return true;
        } catch (error) {
            throw error ;
            return false
        }
    }

    // now we make a fucntion that will give use 1 single post 
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw  error 
            return false
        }
    }
    // now we want ki ham sare post ko dekh but hamare pass woh post na aaye jinka status inactive hai 

    // thats why we are using the databse query we need only the data has staus of active == status is  our index 
    // ab iss parameter ke ander ham ek variable banayenge jo ki khud se uni chzizo ko lega ko query me likha hua hai 
    // woh variable me ham ek jo saman rakhenge usko ek query likhenge jo ki array me hoga 
    async getPosts(queries =[Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries
            )
        } catch (error) {
            throw error 
        }

    }
}

const service = new Service()
export default service;