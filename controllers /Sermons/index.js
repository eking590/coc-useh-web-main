import express from 'express'; 
import Sermon from '../../models/sermons.js';
import asyncHandler from "express-async-handler";


export const createSermon = asyncHandler(async(req, res) =>{
    const { Teacher, Title, imageUrl, details } = req.body 

    //add the sermon JSON to the Database 
    const NewSermon = new Sermon({ Teacher, Title, imageUrl, details})
    try {
        const sermonCreated = await NewSermon.save() 
        res.status(200).json(sermonCreated)
    } catch (error) {
        res.status(400).json(error)
        
    }


}) 
//get sermons by pagination 

export const getSermons = asyncHandler(async(req, res) =>{
    const {page, limit} = req.query;
   
    const sermons = await Sermon.find()
    .skip((page - 1) * limit)
    .limit(limit);

    res.send(sermons); 
}) 


//get sermon by id 
export const getSermon = asyncHandler(async(req, res, next) => {
    const id = req.body.id 
    
    const FindSermon = await Sermon.findById({_id:id})
    if (!FindSermon) {
        res.status(404);
        throw new Error (`${id} not Found!!`)
    } else{
        return res.status(200).json( FindSermon)
    } 
    
    
    
}) 

//delete sermon by id 

export const deleteSermon = asyncHandler(async(req, res) =>{
    const id = req.body.id 
    
    const FindSermon = await Sermon.findByIdAndDelete({_id:id})
    if (!FindSermon) {
        res.status(404); 
        throw new Error(`${id} not Found!!`)
    }
    return res.status(200).json({'deleted sermon': FindSermon})
}) 


// update sermon by id 

export const UpdateSermon = asyncHandler(async(req, res) =>{
    const id = req.body.id 

    const getSermon = await Sermon.findById({_id:id}) 
    if(!getSermon){
        res.status(404); 
        throw new Error(`${id}  not FOUND!!!`) 

    } 
    const updatedSermon = await Sermon.findByIdAndUpdate(getSermon, req.body, {new: true})
    return res.status(200).json({ updatedSermon})
}) 