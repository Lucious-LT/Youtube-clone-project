import express from "express";

import {updateUsers,  deleteUser, getUser, subscribe,  unsubscribe, like, dislike } from "../controller/user.js";
import {verifyToken } from "../verifyToken.js"


const router = express.Router();

   //update user
   router.put ("/:id", verifyToken, updateUsers)

   //delete user

   router.delete("/:id", verifyToken, deleteUser)

   //get user
router.put("/find/:id", verifyToken, getUser )
   //subscribe a user
router.put("/sub/:id", verifyToken,  subscribe)
    //unsubscribe a user
router.put("/unsub/:Id", verifyToken, unsubscribe )
    //like a video
router.put("/like/:videoId", verifyToken, like )
    //dislike a video
router.put("/dislike/:videoId", verifyToken, dislike )








export default router;