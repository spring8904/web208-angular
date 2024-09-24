import Joi from 'joi'

export const authValidator = Joi.object({
  email: Joi.string().email().required(),
  role: Joi.string().optional(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
}).options({ abortEarly: false })
