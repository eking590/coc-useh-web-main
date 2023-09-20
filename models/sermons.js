import mongoose, { Schema, Document, Model } from "mongoose";


const SermonSchema = new Schema({
    Teacher:{type: String}, 
    Title: {type: String}, 
    imageUrl: {type: String}, 
    details: {type: String}, 
     

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
const Sermon = mongoose.model('Sermon', SermonSchema); 
export default Sermon; 