const { errorMessage } = require("../../utilities/constants")

const emailValidation = {
    notEmpty: {
      errorMessage: errorMessage.emailNotEmpty,
      bail: true,
    },
    isEmail: {
      errorMessage: errorMessage.validEmail,
      bail: true,
    },
    bail: true,
    trim: true,
    toLowerCase: true,
}
const passwordvalidation = {
    notEmpty: {
        errorMessage: errorMessage.emptyPassword,
        bail: true,
    },
    isLength: {
        errorMessage: errorMessage.passwordLength, //fieldTenantNameLen
        options: { min: 6, max:20 },
        bail: true,
    },
    bail: true,
    trim: true,
    toLowerCase: true,
}
const nameValidation = {
    notEmpty: {
        errorMessage: errorMessage.emptyName,
        bail: true,
    },
    bail: true,
    trim: true,
    toLowerCase: true,
}
const feedbackStar = {
    notEmpty: {
        errorMessage: errorMessage.feedbackStarEmpty,
        bail: true,
    },
    isInt: {
        options: { min: 1, max: 5 },
        errorMessage: errorMessage.feedbackStarLength
    }
}
const feedbackMessage = {
    notEmpty: {
        errorMessage: errorMessage.feedbackMessageEmpty,
        bail: true,
    },
    isLength: {
        options: { min: 1, max: 100 },
        errorMessage: errorMessage.feedbackMessageLength
    }
}
module.exports = {
    createUser:{
        email: emailValidation,
        name: nameValidation,
        password: passwordvalidation,
    },
    login: {
        email: emailValidation,
        password: passwordvalidation,
        bail: true,
        trim: true,
        toLowerCase: true,
    },
    addFeedback: {
        feedbackStar:feedbackStar,
        feedbackMessage: feedbackMessage
    },
    updateFeedback: {
        feedbackId:{
            notEmpty: {
                errorMessage: errorMessage.feedbackIdEmpty,
                bail: true,
            },
        },
        feedbackStar:feedbackStar,
        feedbackMessage: feedbackMessage
    }
}