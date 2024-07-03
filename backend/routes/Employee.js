const express = require ("express")
const router = express.Router()
const EmployeeController=require("../controller/EmployeeController");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Répertoire où les fichiers seront stockés temporairement
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Utilisation du nom de fichier d'origine
    },
  });
  
  const upload = multer({ storage: storage });

router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getAllEmployees', EmployeeController.getAllEmployees);

// Route pour récupérer un bulletin par son ID
router.get('/getEmployeeById/:id', EmployeeController.getEmployeeById);

// Route pour mettre à jour un bulletin
router.put('/updateEmployee/:id', EmployeeController.updateEmployee);
// Route pour supprimer un bulletin
router.delete('/deleteEmployee/:id',EmployeeController.deleteEmployee);
router.post('/regenere-employee', upload.single('file'), EmployeeController.regenereEmployee);




module.exports = router