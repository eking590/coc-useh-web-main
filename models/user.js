import mongoose, { Schema, Document, Model } from "mongoose";


const UserSchema = new Schema({
    firstName:{type: String}, 
    middleName: {type: String}, 
    email: {type: String}, 
    password: {type: String}, 
    userType: {type:String, default: 'member'}, 
    phoneNumber: {type: String}, 
    address: {type: String}, 
    Church: {type: String}, 
    Congregation: {type: String}, 
    DateOfBirth: {type: Date}, 
    DateOfBaptism: {type: Date}, 

    timestamps: {
        createdAt: {
            type: Date, 
            default: Date.now
        },
        updatedAt: {
            type: Date, 
            default: Date.now 
        }
    }
    
})
//create Model 
const User = mongoose.model('User', UserSchema); 
export default User; 