import sequilize from "sequelize"
const sequilize = new Sequelize(process.env.DB_REMOTE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging:false, // Toggle logging if needed
});

module.exports = sequilize;
