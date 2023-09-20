import express from 'express'; 
import bodyParser from 'body-parser';
import { MONGO_URL } from './config/db.js'
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import { userRoute } from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { SermonsRoutes } from './routes/SermonsRoutes.js';



const port = 6000; 

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(cors()); 

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    next(); 
}); 

//routes 
app.use('/user', userRoute); 
app.use('/sermon', SermonsRoutes); 

app.get('/', (req, res) =>{
    res.send('Welcome to COC USEH BACKEND')
}) 
app.use(errorHandler); 

//add error handling here 
//connect to mongodb 
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology:true })
.then(() => console.log('Connected to MongoDatabase...'))
.catch(err => console.error('Could not connect to Mongo Database...')) 

app.listen(process.env.PORT || port,() => {
    console.log(`COC USEH WEB APP server listening at http://localhost: ${port}`)
})