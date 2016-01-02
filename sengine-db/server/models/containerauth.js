'use strict';
module.exports = function(sequelize, DataTypes) {
  var ContainerAuth = sequelize.define('ContainerAuth', {
    ContainerID: DataTypes.INTEGER,
    APITokenID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ContainerAuth;
};