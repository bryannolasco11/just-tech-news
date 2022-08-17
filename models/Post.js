const { Model, DataTypes } = require('sequalize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}