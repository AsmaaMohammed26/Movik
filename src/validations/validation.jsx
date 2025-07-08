import Joi from "joi";

export const registerSchema = Joi.object({
  user_name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  phone: Joi.string().pattern(/^01[0-2,5]{1}[0-9]{8}$/).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$"
      )
    )
    .required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$"
      )
    )
    .required(),
});
