const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelize');
const Todo = require('../todo/todo');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    timestamps: false,
  }
);

Category.hasMany(Todo, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
    type: DataTypes.BIGINT,
  },
});

Todo.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
    type: DataTypes.BIGINT,
  },
});

module.exports = Category;
