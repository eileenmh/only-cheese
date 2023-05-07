const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: { 
        type: DataTypes.STRING
    }, 
    password:{
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    user_image: {
        type: DataTypes.STRING
    },
    cheeses: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    modelName:'user'
    
}
);

module.exports = User;