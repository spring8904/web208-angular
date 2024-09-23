import { Router } from 'express'
import { createBid, updateBid } from '../controllers/bid'

const bidRouter = Router()

bidRouter.post('/', createBid)
bidRouter.put('/:id', updateBid)

export default bidRouter
