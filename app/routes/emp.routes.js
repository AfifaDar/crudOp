module.exports = app => {
    const emps = require("../controllers/emp.controller");
  
    var router = require("express").Router();
  
    // Create a new emp
    router.post("/", emps.create);
  
    // Retrieve all emps
    router.get("/allEmp", emps.findAll);
  
  
    // Retrieve a single emp with id
    router.get("/:id", emps.findOne);
  
    // Update a emp with id
    router.put("/:id", emps.update);
  
    // Delete a emp with id
    router.delete("/:id", emps.delete);
  
    // Delete all emps
    router.delete("/", emps.deleteAll);
  
    app.use('/api/emps', router);
  };