const express = require ("express")
const router = express.Router()
const VisitController=require("../controller/VisitController");

router.post('/createVisit', VisitController.createVisit);
router.get('/getAllVisits', VisitController.getAllVisits);
router.get('/getAllVisitsDaily', VisitController.getAllVisitsDaily);
router.get('/getAllVisitsArchive', VisitController.getAllVisitsArchive);

router.get('/getAllVisitsDailyzenith1', VisitController.getAllVisitsDailyzenith1);
router.get('/getAllVisitsDailyzenith2', VisitController.getAllVisitsDailyzenith2);
router.get('/getAllVisitsDailysfax', VisitController.getAllVisitsDailysfax);
router.get('/getAllVisitsDailycharguia', VisitController.getAllVisitsDailycharguia);
// Route pour récupérer un bulletin par son ID
router.get('/getVisitById/:id', VisitController.getVisitById);

// Route pour mettre à jour un bulletin
router.put('/updateVisit/:id', VisitController.updateVisit);


// Route pour supprimer un bulletin
router.delete('/deleteVisit/:id',VisitController.deleteVisit);

router.post('/addVisit', VisitController.addVisit);
router.post('/addBadgeE', VisitController.addBadgeE);


module.exports = router