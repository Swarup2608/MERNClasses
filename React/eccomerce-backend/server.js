import express from 'express';
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

// app.use('/api/user',userRouter);
// app.use('/api/products',productRouter);

connectDB()

app.get('/',(req,res)=>{
    res.send('API IS WORKING...');
})

app.listen(port,()=>{
    console.log("Server started on PORT : "+port);
})
