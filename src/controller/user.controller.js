const User = require('../entities/user')
const jwt = require('jsonwebtoken');
const { JWT, errorMessage, successMessage} = require('../utilities/constants')
const { getRepository } = require('typeorm');

async function registerUser(req,res) {
    try {
        const userRepository = getRepository(User);
        const {name,password,email} = req.body;
        let user = await userRepository.save({name,password,email});
        return res.send({message: successMessage.addUser,user}).status(200)
    } catch (error) {
        return res.send({message: errorMessage.somethingWentWrong}).status(400);
    }
}

async function userLogin(req,res) {
    try {
        const userRepository = getRepository(User);
        const {email,password} = req.body;

        const getUser = await  userRepository.findOne({where:{email:email,password:password}})
        if(getUser) {
            const payload = {
                id: getUser.id,
                name: getUser.name,
                email: getUser.email
            }
            const token = jwt.sign(payload,JWT.secretKey, JWT.expiresIn);
            res.send({status:successMessage.success,accessToken: token,user:getUser}).status(200)
        }
    } catch (error) {
        return res.send({message: errorMessage.somethingWentWrong}).status(400);    }
}

module.exports ={
    registerUser,userLogin
}