// import models
const List = require('./List');
const ListStock = require('./ListStock');
const Stock = require('./Stock');
const User = require('./User');

// User hasMany List
User.hasMany(List, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// List belongsto User
List.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// List belongToMany Stock (through ListStock)
List.belongsToMany(Stock, {
    through: {
        model: ListStock,
        unique: false,
    }
})

// Stock belongToMany List (through ListStock)
Stock.belongsToMany(List, {
    through: {
        model: ListStock, 
        unique: false,
    }
})


module.exports = {
  List,
  ListStock,
  Stock,
  User,
};
