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
        this.databses = new Databases(this.client)
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
}

const service = new Service()
export default service;