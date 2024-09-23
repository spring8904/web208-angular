import express from 'express'
import morgan from 'morgan'
import connectMongoDB from './config/db'
import router from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

connectMongoDB('mongodb://localhost:27017/web208')

app.listen(3000)
app.use('/', router)

export const viteNodeApp = app
