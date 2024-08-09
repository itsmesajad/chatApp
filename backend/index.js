import express from "express";
import dotenv from "dotenv";

import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'

import connectMongoDB from './db/connectMongoDB.js'

dotenv.config();


const port = process.env.PORT || 3000

const app = express();
app.use(express.json()) 

app.listen(port, () => {
    connectMongoDB()
    console.log(`Server listening on ${port}`)
})



// app.get('/api/auth/signup', (req, res) => {
//     res.json('This is a test server route for signup');
// })

app.use(`/api/auth`, authRouter)
app.use(`/api/user`, userRouter)