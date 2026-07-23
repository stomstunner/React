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
    databases;
    bucket; // name for storage 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        // now hame databse aur bucket hmara hamesha client se hi banta hai 
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }
    // now in the class we make a method jo ki post create karega

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            // here we return in await hamra ek created post jo ki hamra return karega databse se createDocument ka use kar ke 
            return await this.databases.createDocument(
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
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            // now we juct return true and we have to handle the true on front end 
            return true;
        }catch(error){
            console.log(error)
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

    // now we make the upload file method .. jisme ham bass createfile method ka use karnege 
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

    // so upload file karte time hame return me file ka id hi milega jisse ki kam create post me featured image ko de denge 

    // now lets make the deletefile jisme ki hame bass file ka id dena hai 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error 
            return false
        }
    }

    // now we make the filePreview function jisse call kar ke ham ui pe compress image show kar sake 

    getFilePreview(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service;