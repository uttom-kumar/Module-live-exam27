
import { blogModel } from './../model/BlogModel.js';

export const CreateBlogService = async (req) => {
    try {
        const reqBody = req.body;
        let data = await blogModel.create(reqBody)
        
        return{ message: "Blog created successfully", data: data }
    } 
    catch (error) {
        return{ message: "Error creating blog", error: error.message }
    }
}


export const ReadBlogService = async (req) => {
    try {
        const blogID = req.params.blogID;
        const data = await blogModel.find({_id : blogID});
    
        if (!data) {
          return { message: "Blog not found" }
        }
    
        return{
            status: "success",
            message: "Blog Read successfully",
            data : data
        }
    } 
    catch (error) {
        return{ message: "Some thing went wrong", error: error.message }
    }
}

export const UpdateBlogService = async (req) => {
    try {
        const blogID = req.params.blogID;
        let reqBody = req.body
        const blog = await blogModel.findOne({_id : blogID});
        const data = await blogModel.updateOne({_id : blogID},{$set: reqBody});

        if (!blog) {
          return { message: "Blog not found" }
        }
    
        return{
            status: "success",
            message: "Blog update successfully",
            data : data
        }
    } 
    catch (error) {
        return  { message: "Some thing went wrong", error: error.message }
    }
}


export const DeleteBlogService = async (req) => {
    try {
        const blogID = req.params.blogID;
        const blog = await blogModel.findOne({_id : blogID});
        const data = await blogModel.deleteOne({_id : blogID});
    
        if (!blog) {
          return { message: "Blog not found" }
        }
    
        return{
            status: "success",
            message: "Blog delete successfully",
            data : data
        }
    } 
    catch (error) {
        return { message: "Error retrieving blog", error: error.message }
    }
}