import dbConnect from '../../../libs/dbConnect';
import Post from '../../../models/post.model'

export default async function handler( req, res) {
    await dbConnect()
   if (req.method === "GET"){
       const posts = await Post.find({})
       res.status(200).json(posts)
   }else if (req.method === "POST"){
       const post = await Post.create(req.body)
       res.status(200).json(post)
   }else {
       res.status(405).json({ error: `${req.method} not allowed! only GET and POST allowed`})
   }
   
}