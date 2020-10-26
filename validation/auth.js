const Joi = require('@hapi/joi');

const registerValidation = ({ login, password }) => {
  const validationSchema = Joi.object({
    login: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
  })
  const { error } = validationSchema.validate({ login, password })

  return error;
}

// in our case auth and register validation is the same, but anyway, better create diff function;
const loginValidation = registerValidation

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
