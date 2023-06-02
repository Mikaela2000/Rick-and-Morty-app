require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelUser = require('./models/User')
const modelFavorite= require('./models/Favorite')

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);



modelUser(sequelize);
modelFavorite(sequelize);


const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
   User,
   Favorite,
   ...sequelize.models,
   conn: sequelize,
};
