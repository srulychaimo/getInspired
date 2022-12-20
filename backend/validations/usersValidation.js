import Joi from "joi";

export const userRegisterValidate = (userInput) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
  });

  return schema.validate(userInput);
};
