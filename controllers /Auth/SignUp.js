import express from "express"
import User from "../../models/user.js"; 
import { hashPassword } from "../../utils/config.js";
import asyncHandler from "express-async-handler"


export const SignUp = asyncHandler(async(req, res)=>{
    const{ firstName, middleName, lastName, email, userType, phoneNumber, 
        address, DateOfBirth, DateOfBaptism, church, congregation } = req.body; 
    const password = await hashPassword(req.body.password); 
    const user = new User({ firstName, lastName, middleName, email, password, userType, 
    phoneNumber, address, church, congregation, DateOfBirth, DateOfBaptism }); 
    
    try {
        //check if user with email already exists
        const userExists = await User.findOne({ email }); 
        if (userExists) {
            console.log(userExists)
            return res.status(201).send({msg: "User Already exist!!"})
        }
        //save user to database 
        await user.save(); 
        
        //send welcome Email 
        //welcomeEmail(user.email, user.firstName); 

        const data = user
        res.status(201).send({
            data: data, 
            msg: "Signup successful!!"
        })
    } catch (error) {
        console.log("there was an error", error)
        res.status(400).send(error); 
    }
})