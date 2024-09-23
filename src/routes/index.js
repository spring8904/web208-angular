import express from 'express'
import authRouter from './auth'
import bidRouter from './bid'
import productRouter from './product'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/bids', bidRouter)
router.use('/products', productRouter)

export default router
