const { EntitySchema,Entity } = require('typeorm');
class User {
    constructor(name,email,password) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}
module.exports = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      length: 255,
      unique: false
    },
    email: {
        type: 'varchar',
        length:255,
        unique:true
    },
    password: {
        type: 'varchar',
        length:255,
        unique:false
    },
    createdAt: {
      createDate: true,
      type: 'timestamp'
    },
    updatedAt: {
        updateDate: true,
        type: 'timestamp'
      }
  }
});
