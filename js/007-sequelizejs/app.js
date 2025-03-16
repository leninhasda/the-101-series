var Sequelize = require('sequelize');

// make db connection
// var sequelize = new Sequelize('node_sequelize', 'root', 'password');
var sequelize = new Sequelize('node_sequelize', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

// make a table model schema
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// execute the schema
User.sync({force: true})
.then(function () {
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
})
.then(function(data){
    console.log("asdasd");
});