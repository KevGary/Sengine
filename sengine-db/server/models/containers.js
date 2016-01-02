'use strict';
module.exports = function(sequelize, DataTypes) {
  var Containers = sequelize.define('Containers', {
    CID: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Containers;
};