import express from 'express'

const app = express()

import'./database/connection'
import userRoute from './routes/userRoutes'

app.use(express.json())
app.use("/api/auth",userRoute)


export default app
