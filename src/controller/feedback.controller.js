const Feedback = require('../entities/feedback')
const { JWT, errorMessage, successMessage} = require('../utilities/constants')
const { getRepository } = require('typeorm');

async function getUserFeedback(req,res){
    try {
        let {id} = req.user;
        const feedbackRepository = await getRepository(Feedback);

        const userFeedbacks = await feedbackRepository.findOne({where:{user:id}}) || {};
        res.send({message: successMessage.success,userFeedbacks }).status(200);
    } catch (error) {
        return res.send({message: errorMessage.somethingWentWrong}).status(400);
    }
}

async function addFeedback(req,res) {
    try {
        const {feedbackStar,feedbackMessage} = req.body;
        const {id} = req.user;
        const feedbackRepository = await getRepository(Feedback);

        const userFeedbacks = await feedbackRepository.findOne({where:{user:id}});
        if(userFeedbacks){
            return res.send({message:errorMessage.feedbackExist}).status(400);
        }
        let feedback = await feedbackRepository.save({feedbackStar,userId:id,feedbackMessage})
        return res.send(feedback).status(200);
    } catch (error) {
        return res.send({message: errorMessage.somethingWentWrong}).status(400);
    }
}

async function updateFeedback(req,res) {
    try {
        const feedbackRepository = await getRepository(Feedback);
        const {feedbackId,feedbackStar,feedbackMessage} = req.body;
        const {id} = req.user;

        let fetchFeedback = await feedbackRepository.findOne({where:{id:feedbackId,userId:id}})
        if(!fetchFeedback) return res.send({message: errorMessage.feedbackNotFound}).status(400);

        const updated = await feedbackRepository.update({id:fetchFeedback.id},
            {feedbackMessage:feedbackMessage,feedbackStar:feedbackStar});

        if(updated.affected) {
            res.send({message: successMessage.updateFeedback}).status(200);
        }
    } catch (error) {
        return res.send({message: errorMessage.somethingWentWrong}).status(400);
    }
}

module.exports = {getUserFeedback,addFeedback,updateFeedback}