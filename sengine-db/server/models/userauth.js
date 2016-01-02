'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserAuth = sequelize.define('UserAuth', {
    UserID: DataTypes.INTEGER,
    APITokenID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserAuth;
};