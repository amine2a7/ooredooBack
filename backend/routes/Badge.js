const express = require ("express")
const router = express.Router()
const BadgeController=require("../controller/BadgeController");

router.post('/createBadge', BadgeController.createBadge);
router.get('/getAllBadges', BadgeController.getAllBadges);

// Route pour récupérer un bulletin par son ID
router.get('/getBadgeById/:id', BadgeController.getBadgeById);

// Route pour mettre à jour un bulletin
router.put('/updateBadge/:id', BadgeController.updateBadge);
router.put('/updateBadgeDispo/:id/:id1', BadgeController.updateBadgeDispo);

// Route pour supprimer un bulletin
router.delete('/deleteBadge/:id',BadgeController.deleteBadge);
router.get('/unavailable-visitors', BadgeController.getUnavailableVisitorBadges);
router.get('/unavailable-employee', BadgeController.getUnavailableEmployeeBadges);
router.get('/unavailable-visitorsZ1', BadgeController.getUnavailableVisitorBadgeszenith1);
router.get('/unavailable-employeeZ1', BadgeController.getUnavailableEmployeeBadgeszenith1);
router.get('/unavailable-visitorsZ2', BadgeController.getUnavailableVisitorBadgeszenith2);
router.get('/unavailable-employeeZ2', BadgeController.getUnavailableEmployeeBadgeszenith2);
router.get('/unavailable-visitorscharguia', BadgeController.getUnavailableVisitorBadgescharguia);
router.get('/unavailable-employeecharguia', BadgeController.getUnavailableEmployeeBadgescharguia);
router.get('/unavailable-visitorssfax', BadgeController.getUnavailableVisitorBadgessfax);
router.get('/unavailable-employeesfax', BadgeController.getUnavailableEmployeeBadgessfax);




module.exports = router