const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('./db');

class Dog extends Model {

}

Dog.init({
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Dog', // We need to choose the model name
});


sequelize.sync({alter: true});

module.exports = {Dog};

// module.exports = {Dog: Dog, Cat: Cat};
