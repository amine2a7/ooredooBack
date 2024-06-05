const express = require ("express")
const router = express.Router()
const VisitorController=require("../controller/VisitorController");

router.post('/createVisitor', VisitorController.createVisitor);
router.get('/getAllVisitors', VisitorController.getAllVisitors);

// Route pour récupérer un bulletin par son ID
router.get('/getVisitorById/:id', VisitorController.getVisitorById);

// Route pour mettre à jour un bulletin
router.put('/updateVisitor/:id', VisitorController.updateVisitor);
// Route pour supprimer un bulletin
router.delete('/deleteVisitor/:id',VisitorController.deleteVisitor);




module.exports = router