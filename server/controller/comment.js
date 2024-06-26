import {createError } from "../error.js"
import Comment from "../models/Comment.js"
import Video from "../models/Video.js"



export const addComment = async (req, res, next)=>{
    const newComment = new Comment ({...req.body, userId:req.user.id});

    try{
        const savedComment = await newComment.save();
        res.status(200).send(savedComment)

    }catch(err){next(err);}

}

// export const addComment = async (req, res, next) => {
//   try {
//     // Create a new comment using the request body and a test userId
//     const testUserId = "" + Math.floor(Math.random() * 1000);
//     const newComment = new Comment({ ...req.body, userId: testUserId });

//     // Save the new comment to the database
//     const savedComment = await newComment.save();

//     // Send the saved comment as the response
//     res.status(200).send(savedComment);
//   } catch (err) {
//     console.error("Error adding comment:", err);
//     next(err);
//   }
// };

export const deleteComment = async (req, res, next)=>{

    try{
        const comment = await Comment.findById(res.params.id)
        const video = await Video.findById(res.params.id)
        if (req.user.id === comment.userId || req.user.id=== video.userId){
        await Comment.findByIdAndDelete(req.params.id)
    res.status(200).json("The comment has been deleted!!")
    }
    else{
        return next (createError(403, "you can only delete your comment !!"))
    }
}catch(err){
    next(err)
}
}





export const getComment = async (req, res, next)=>{

    try{
  const comment = await Comment.find({videoId:req.params.videoId})
  res.status(200).json(comment)
    }catch(err){next(err)}

}