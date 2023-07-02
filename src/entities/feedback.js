const { EntitySchema } = require('typeorm');

class Feedback {
  constructor(user, feedbackText) {
    this.user = user;
    this.feedbackText = feedbackText;
  }
}

module.exports = new EntitySchema({
  name: 'Feedback',
  tableName: 'feedback',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    feedbackStar: {
        type: 'int',
    },
    userId: {
      type: 'int'
    },
    feedbackMessage: {
      type: 'text'
    },
    createdAt: {
      createDate: true,
      type: 'timestamp'
    },
    updatedAt: {
        updateDate: true,
        type: 'timestamp'
      }
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'User',
      joinColumn: {
        name: 'userId',
        referencedColumnName: 'id'
      }
    }
  }
});
