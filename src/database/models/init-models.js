let DataTypes = require("sequelize").DataTypes;
let _campaign = require("./campaign");

function initModels(sequelize) {
  let campaign = _campaign(sequelize, DataTypes);


  return {
    campaign,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
