'use strict';
module.exports = function(sequelize, DataTypes) {
  var APITokens = sequelize.define('APITokens', {
    apiToken: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return APITokens;
};