import Joi from 'joi'

export const authValidator = Joi.object({
  email: Joi.string().email().required(),
  role: Joi.string(),
  password: Joi.string().min(6).required(),
}).options({ abortEarly: false })
