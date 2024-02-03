const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
     id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
        },
     user_name: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
     }
    }
)

module.exports = User;