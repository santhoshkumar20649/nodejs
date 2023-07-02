# nodejs

run 'npm install' after cloning 
run 'npm start' to run the server


/user/createUser    ->API to create user


/user/login         -> API to login ang get th accessToken,below sample request body
{
    "email": "santhoshsfdret@gmail.com",
    "password": "fdfsdfs"   
}


/user/addFeedback   ->API to add the feedback add accessToken in authorization header use below request body
{
    "feedbackStar": 5,
    "feedbackMessage": "message"
}

/user/getFeedback   -> API to fetch the user feedback, add the accessToken

/user/updateFeedback  ->API to update the feedback,add accessToken

{
    "feedbackStar": 5,
    "feedbackMessage": "updated message",
    "feedbackId": 1
}