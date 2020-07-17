const Joi = require("@hapi/joi");

const userValidation = (data) => {
  const schema = Joi.object({
    name: {
      "first-name": Joi.string().required(),
      "last-name": Joi.string().required(),
      "middle-name": Joi.string().allow(""),
    },
    "email-id": {
      primary: Joi.string().email(),
      secondary: Joi.string().email().allow(""),
    },
    password: Joi.string().min(10).max(1024).required(),
    "contact-no": {
      primary: Joi.string().required(),
      secondary: Joi.string().allow(""),
    },
    address: {
      street: Joi.string().required(),
      city: Joi.string().allow(""),
      district: Joi.string().allow(""),
      state: Joi.string().allow(""),
      "pin-code": Joi.number().required(),
    },
    avatar: {
      url: Joi.string().allow(""),
      "thumbnail-url": Joi.string().allow(""),
    },
    "auth-token": Joi.string().allow(""),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    "email-id": Joi.string().min(6).required().email(),
    password: Joi.string().min(10).required(),
  });
  return schema.validate(data);
};

module.exports.userValidation = userValidation;
module.exports.loginValidation = loginValidation;
