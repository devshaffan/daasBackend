const config = {
  app: {
    port: process.env.PORT || 3000,
    project: 'node-express-mysql-sequelize-demo-app',
    url: 'http://localhost:3000/api',
    secret: 'asdfasfasdfasdafsdf231243243234234234234234234234',
  },
  db: {
    host: 'db2.ch4vwnwnp7th.us-east-1.rds.amazonaws.com',
    database: 'daas',
    username: 'rootdb',
    password: 'rootdb1234',
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  },
  sendgrid: {
    apiKey: ''
  } 
}
module.exports = config;
