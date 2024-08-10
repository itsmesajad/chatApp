import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from './routes/auth.route.js'
import messagesRouter from './routes/message.route.js'
import userRouter from './routes/user.route.js'

import connectMongoDB from './db/connectMongoDB.js'

dotenv.config();


const port = process.env.PORT || 3000

const app = express();

app.use(express.json()) 
app.use(cookieParser());

app.use(`/api/auth`, authRouter)
app.use(`/api/user`, userRouter)
app.use(`/api/messages`, messagesRouter)

app.listen(port, () => {
    connectMongoDB()
    console.log(`Server listening on ${port}`)
})
