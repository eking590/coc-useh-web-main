import express from 'express'; 
import { SignUp } from '../controllers /Auth/SignUp.js';
const router = express.Router(); 

//create user profile 
router.post("/api/v1/signup", SignUp)


//login user 
router.post("/api/v1/login", ) 


//get current user info 
router.get("/api/v1/current-user")


export { router as userRoute }; 