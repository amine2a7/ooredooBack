const express = require ("express")
const router = express.Router()
const VisitController=require("../controller/VisitController");

router.post('/createVisit', VisitController.createVisit);
router.get('/getAllVisits', VisitController.getAllVisits);

// Route pour récupérer un bulletin par son ID
router.get('/getVisitById/:id', VisitController.getVisitById);

// Route pour mettre à jour un bulletin
router.put('/updateVisit/:id', VisitController.updateVisit);
// Route pour supprimer un bulletin
router.delete('/deleteVisit/:id',VisitController.deleteVisit);

router.post('/addVisit', VisitController.addVisit);




module.exports = router