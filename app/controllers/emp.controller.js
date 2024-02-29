const db = require("../models");
const Emp = db.emp;
const Op = db.Sequelize.Op;

// Create and Save a new Emp
exports.create = async (req, res) =>{
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
      let id = await Emp.findAll()
     // console.log(id.length)
    // Create a Emp
    const emp = {
      id:id.length+1,
      name: req.body.name,
      
    };
  
    // Save Emp in the database
    Emp.create(emp)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the emp."
        });
      });
  };

// Retrieve all Emps from the database.
exports.findAll = (req, res) => {
    Emp.findAll()
   .then(data => {
        res.send(data);
      })
   .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving emps."
        });
      });
  };
  


// Find a single Emp with an id
exports.findOne = async (req, res) => {
  try{
  const data = await Emp.findByPk(req.params.id)
  res.send(data);
  }
  catch(err){
    res.status(500).send({
      message:
        err.message || "Error retrieving emp with id=" + req.params.id
    });
  }

  
};

// Update a Emp by the id in the request
exports.update = async (req, res) => {
  try{

  const id = req.params.id;
  
  const resultStatus = await Emp.update(req.body, {
    where: { id: id }
  });
  if(resultStatus == 1) res.send({message : 'success'});
  else res.send({message : 'fail'});
}
catch(err) {
  res.status(500).send({
    message:
      err.message || "Error updating emp with id=" + id
  });
}
};

// Delete a Emp with the specified id in the request
exports.delete = async(req, res) => {
  try{
  const id = req.params.id;
  const resultStatus = await Emp.destroy({where: {id: id}});
  if(resultStatus == 1) res.send({message : 'success'});
  else res.send({message : 'fail'});
}
catch(err) {
  res.status(500).send({
    message:
      err.message || "Error updating emp with id=" + id
  });
}
}
exports.deleteAll = async (req, res) => {
  try{
  const resultStatus = await Emp.destroy({
    where: {},
    truncate: false
  })
    
    res.send({ message: `${resultStatus} Emps were deleted successfully!` });
}
    catch(err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Emps."
      });
      }
      }
  
