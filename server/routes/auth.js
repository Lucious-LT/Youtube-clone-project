import express from "express";

import { signup, signin, googleAuth  } from "../controller/auth.js";


const router = express.Router();

   
//Create a new user
router.post("/signup", signup );


//Login a user
router.post("/signin", signin );

//Logout a user


//Google login
router.post("/google", googleAuth );






export default router;