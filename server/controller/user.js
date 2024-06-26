import {createError} from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js"

export const updateUsers = async (req, res, next)=>{
    if (req.params.id === req.user.Id){
try{
 const updatedUser = await User.findByIdAndUpdate(req.params.id,{

     $set:req.body
 },
  {new:true}
 )
 res.status(200).json(updatedUser)

}
    catch(err){
        next(err)
}
}else{
        return next(createError(403, "you can update only your acount"))
    }
    
}

export const deleteUser = async (req, res, next)=>{
    if (req.params.id === req.user.id){
try{
await User.findByIdAndDelete(
    req.params.id,
);
 res.status(200).json("User has been deleted.....")

}
    catch(err){
        next(err)
}
}else{
        return next(createError(403, "you can update only your acount"))
    }
    
}

export const getUser=async(req, res, next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    }catch(err){
        next(err)
    }
    
}

export const subscribe=async(req, res, next)=>{
    try{
        await User.findByIdAndUpdate(req.user.Id,{
        $push:{subscribedUsers: req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id,{

          $inc:{subscribers: 1},
        });
 res.status(200).json("Subcription successful!!")
    }catch(err){
        next(err);
    }
    
};

export const unsubscribe=async(req, res, next)=>{
    try{
             await User.findByIdAndUpdate(req.user.Id,{
        $pull:{suscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{

          $inc:{suscribers: -1}  
        })
 res.status(200).json("unsubcription successful!!")

    }catch(err){
        next(err)
    }
    
}

export const like= async (req, res, next)=>{
    const id =req.user.Id;
    const videoId =req.params.videoId;
    try{
    await Video.findByIdAndUpdate(videoId,{
        
        $addToSet:{likes:id},
        $pull:{dislikes:id},
    })
    res.status(200).json("like added")
    }catch(err){
        next(err)
    }
    
}

export const  dislike= async (req, res, next)=>{
   const id =req.user.Id;
    const videoId =req.params.videoId;
    try{
    await Video.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
    })
    res.status(200).json("video has been disliked")
    }catch(err){
        next(err)
    }
    
}

// export const update=(req, res, next)=>{
//     try{

//     }catch(err){
//         next(err)
//     }
    
// }

