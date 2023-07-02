const { createConnection } = require('typeorm');
const User = require('./entities/user');
const Feedback = require('./entities/feedback');
exports.connectDatabase = async () => {
    try {
      const connection = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test_schema',
        synchronize: true,
        entities: [User, Feedback]
      })
      console.log('Connected to the database');
      return connection;
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  };

  // module.exports = {connectDatabase}