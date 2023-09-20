import express from 'express'; 
import { UpdateSermon, createSermon, deleteSermon, getSermon, getSermons } from '../controllers /Sermons/index.js';
const router = express.Router()


//post a sermon 
router.post('/api/v1/sermon', createSermon)


//get all sermons 
router.get('/api/v1/get-sermons', getSermons)

//get a sermon by id 
router.get('/api/v1/get-sermon', getSermon)

//delete a sermon by id 
router.delete('/api/v1/delete-sermon', deleteSermon)

//update a sermon by id  
router.put('/api/v1/update-sermon', UpdateSermon)


export { router as SermonsRoutes }

