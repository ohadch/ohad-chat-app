const Joi = require('@hapi/joi');

const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

module.exports.LoginValidation = Joi.object().keys({
    email: Joi.string().regex(EMAIL_REGEX).email().required(),
});

module.exports.SignUpValidation = Joi.object().keys({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    nickname: Joi.string().min(1).required(),
    email: Joi.string().regex(EMAIL_REGEX).email().required(),
});