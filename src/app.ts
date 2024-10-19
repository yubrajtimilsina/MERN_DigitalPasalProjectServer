import express from 'express'

const app = express()

import'./database/connection'
import user from './controllers/userController'

import userRoute from './routes/userRoutes'

app.use("/api/auth",userRoute)


export default app
