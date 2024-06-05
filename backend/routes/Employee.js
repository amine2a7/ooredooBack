const express = require ("express")
const router = express.Router()
const EmployeeController=require("../controller/EmployeeController");

router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getAllEmployees', EmployeeController.getAllEmployees);

// Route pour récupérer un bulletin par son ID
router.get('/getEmployeeById/:id', EmployeeController.getEmployeeById);

// Route pour mettre à jour un bulletin
router.put('/updateEmployee/:id', EmployeeController.updateEmployee);
// Route pour supprimer un bulletin
router.delete('/deleteEmployee/:id',EmployeeController.deleteEmployee);




module.exports = router