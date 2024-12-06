import { CreateBlogService, DeleteBlogService, ReadBlogService, UpdateBlogService } from "../service/BlogService.js"


export const CreateBlog = async(req, res) => {
    let result = await CreateBlogService(req)
    return res.json(result)
}

export const ReadBlog = async(req, res) => {
    let result = await ReadBlogService(req)
    return res.json(result)
}

export const UpdateBlog = async(req, res) => {
    let result = await UpdateBlogService(req)
    return res.json(result)
}

export const DeleteBlog = async(req, res) => {
    let result = await DeleteBlogService(req)
    return res.json(result)
}