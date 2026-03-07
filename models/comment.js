'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }
  Comment.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    attendance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { sequelize, modelName: 'Comment' });
  return Comment;
};