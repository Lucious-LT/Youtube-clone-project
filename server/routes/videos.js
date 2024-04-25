import express from "express";

import {addVideo,   addView, trends,random, getVideo, sub, getByTag, search } from "../controller/video.js";
import {verifyToken} from "../verifyToken.js"


const router = express.Router();

   

// create a video
router.post("/", verifyToken, addVideo)
router.put("/:Id", verifyToken, addVideo)
router.delete("/:Id", verifyToken, addVideo)
router.get("/find/:Id",  getVideo)
router.put("/view/:id",  addView)
router.get("/trend",  trends)
router.get("/random",  random)
router.get("/sub", verifyToken,  sub)
router.get("/tags",  getByTag)
router.get("/search",  search)







export default router;