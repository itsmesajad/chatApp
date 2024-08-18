import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import cors from "cors";

import authRouter from './routes/auth.route.js'
import messagesRouter from './routes/message.route.js'
import userRouter from './routes/user.route.js'

import connectMongoDB from './db/connectMongoDB.js'
import { app, server } from "./socket/socket.js";

dotenv.config();


// const port = process.env.PORT || 3000
const port = process.env.PORT || 5000

// const app = express();

app.use(express.json()) 
app.use(cookieParser());
// app.use(cors())

app.use(`/api/auth`, authRouter)
app.use(`/api/user`, userRouter)
app.use(`/api/messages`, messagesRouter)

server.listen(port, () => {
    connectMongoDB()
    console.log(`Server listening on ${port}`)
})
