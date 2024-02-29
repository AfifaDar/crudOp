module.exports = (sequelize, Sequelize) => {
    const Emp = sequelize.define("emp", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true  
      },
      name: {
        type: Sequelize.STRING
      },
    });
  
    return Emp;
  };