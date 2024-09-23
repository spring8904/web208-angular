import jwt from 'jsonwebtoken'
import User from '../models/User'

const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token)
      return res.status(400).json({ message: 'You are not logged in' })

    const decode = jwt.verify(token, 'id')

    const user = await User.findById(decode.id)

    if (!user) return res.status(400).json({ message: 'Invalid information' })

    next()
  } catch (error) {
    res.status(400).json(error)
  }
}

export default checkPermission
