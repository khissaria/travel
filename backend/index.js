import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import locationRoutes from './routes/location.js';
import discussionRoutes from './routes/discussion.js';

const app=express();

dotenv.config();

app.use(bodyParser.json({limit:"2mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"2mb",extended:true}));
app.use(cors());

app.use('/location',locationRoutes);
app.use('/discussion',discussionRoutes);

app.get('/',(req,resp)=>{
    resp.send('Success');
})

const MONGO_URI=process.env.MONGO_URI||'mongodb+srv://kaushal_hissaria:Accenture@12345@pvtcluster.t0v7x.mongodb.net/travels?retryWrites=true&w=majority';
const PORT = process.env.PORT||5000;

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log(`Server Running on PORT ${PORT}`)))
.catch((err)=>console.log(err));

mongoose.set('useFindAndModify',false);