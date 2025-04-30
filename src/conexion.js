const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('fullstack', 'root', '12qwaszx', {
    host: 'localhost',
    dialect:  'mysql'
  });

async function testConexion(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConexion()

module.exports = sequelize