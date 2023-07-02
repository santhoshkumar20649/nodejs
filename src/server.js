const express = require('express');
const bodyParser = require('body-parser');
const { connectDatabase } = require('./db');
const userRoutes = require('./routes/user.route')
const app = express();


async function start(){
  const connection = await connectDatabase();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/user',userRoutes)
  app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
  });
}
start()

