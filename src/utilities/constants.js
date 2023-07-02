module.exports.JWT = {
    secretKey: 'MysecretKey',
    expiresIn: {
        expiresIn: '5h'
    },
}

module.exports.successMessage = {
    success: 'Success',
    addedFeedback: 'Thank you for giving feedback',
    updateFeedback: 'Feedback updated successfully',
    addUser: 'User registered successfully'
}

module.exports.errorMessage = {
    somethingWentWrong: 'Something went wrong',
    unauthorized: 'unauthorized',
    provideToken: 'Please provide authentication token',
    feedbackExist: 'feedback alsready exist',
    feedbackNotFound: 'feedback not found',
    emailNotEmpty: 'Email should not be empty',
    validEmail: 'Please provide valid email',
    emptyPassword: 'Password should not be empty',
    passwordLength: 'Password should be min 6 and max 20 characters',
    emptyName: 'Name should not be empty',
    feedbackStarEmpty: 'feedbackStar should not be empty',
    feedbackStarLength:'Star rating must be a number between 1 and 5',
    feedbackMessageEmpty: 'feedbackMessage should not be empty',
    feedbackMessageLength: 'feedbackMessage must be between 1 and 100 characters',
    feedbackIdEmpty: 'feedbackId should not be empty'
}