const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../entities/user');
const { getRepository } = require('typeorm');
const { JWT,errorMessage } = require('../utilities/constants');


const validate = validations => {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => {
       return validation.run(req)
      }));  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }  
      let errorPayload = {
        error: errors.array()[0].msg 
      }
      console.log(errorPayload)
      return res.status(400).json(errorPayload);
    };  
};

function authentication(req,res,next) {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) return res.send({ error: errorMessage.provideToken }).status(401);

        jwt.verify(token, JWT.secretKey,async  (err, decoded) => {
        if (err) return res.send({ error: errorMessage.unauthorized }).status(401); 
            const userRepository = await getRepository(User)
            const isValidUser= await userRepository.findOne({where:{id:decoded.id}})
            if(isValidUser) {
                req.user = isValidUser;
                next();
            } else {
                return res.send({ error: errorMessage.unauthorized }).status(401);
            }
        });
    } else {
        return res.send({ error: errorMessage.provideToken }).status(401);
    }

}


module.exports = {validate,authentication}