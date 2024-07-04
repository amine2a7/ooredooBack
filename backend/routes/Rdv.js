const express = require ("express")
const router = express.Router()
const RdvController=require("../controller/RdvController");

router.post('/createRdv', RdvController.createRdv);
router.get('/getAllRdvs', RdvController.getAllRdvs);

// Route pour récupérer un bulletin par son ID
router.get('/getRdvById/:id', RdvController.getRdvById);

// Route pour mettre à jour un bulletin
router.put('/updateRdv/:id', RdvController.updateRdv);


// Route pour supprimer un bulletin
router.delete('/deleteRdv/:id',RdvController.deleteRdv);




module.exports = router