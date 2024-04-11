import express from "express";

import {addVideo, updateVideo, deleteVideo, getVideo, addView, trends,random, sub, getByTag, search } from "../controller/video.js";
import {verifyToken} from "../verifyToken.js"


const router = express.Router();

   

// create a video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", verifyToken, getVideo)
router.get("/view/:id", verifyToken, addView)
router.get("/trend", verifyToken, trends)
router.get("/random", verifyToken, random)
router.get("/sub",  sub)
router.get("/tags",  getByTag)
router.get("/search",  search)







export default router;