import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRouter from './routes/auth.route.js'
import messagesRouter from './routes/message.route.js'
import userRouter from './routes/user.route.js'

import connectMongoDB from './db/connectMongoDB.js'
import { app, server } from "./socket/socket.js";

dotenv.config();


// const port = process.env.PORT || 3000
const port = process.env.PORT || 5000

const __dirname = path.resolve()

// const app = express();

app.use(express.json()) 
app.use(cookieParser());
// app.use(cors())

app.use(`/api/auth`, authRouter)
app.use(`/api/user`, userRouter)
app.use(`/api/messages`, messagesRouter)


app.use(express.static(path.join(__dirname, 'frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(port, () => {
    connectMongoDB()
    console.log(`Server listening on ${port}`)
})
