const VisitModel = require('../model/VisitModel');

async function createVisit(req,res){
    try{
    console.log('data',req.body);
    const Visit=new VisitModel(req.body)
   await Visit.save();
   res.status(201).json(Visit);
    }catch(err){
        res.status(400).send({error: err});
    }
  }

async function getAllVisits(req, res) {
    try {
        const Visits = await VisitModel.find();
        res.status(200).json(Visits);
    } catch (error) {
        console.error('Error fetching Visits:', error);
        res.status(500).json({ error: 'Error fetching Visits' });
    }
}



async function getVisitById(req, res) {
    const VisitId = req.params.id;
    try {
        const Visit = await VisitModel.findById(VisitId);
        if (!Visit) {
            return res.status(404).json({ error: 'Visit not found' });
        }
        res.status(200).json({ Visit: Visit });
    } catch (error) {
        console.error('Error fetching Visit by ID:', error);
        res.status(500).json({ error: 'Error fetching Visit' });
    }
}

async function updateVisit(req, res) {
    const VisitId = req.params.id;
    const updateData = req.body;
    console.log('Received update data:', updateData); // Vérifiez les données reçues du front-end
    try {
      const updatedVisit = await VisitModel.findByIdAndUpdate(VisitId, updateData, { new: true });
      console.log('Updated Visit:', updatedVisit); // Vérifiez la Visit mise à jour
      if (!updatedVisit) {
        return res.status(404).json({ error: 'Visit not found' });
      }
      res.status(200).json(updatedVisit);
    } catch (error) {
      console.error('Error updating Visit:', error);
      res.status(500).json({ error: 'Error updating Visit' });
    }
  }

async function deleteVisit(req, res) {
    const VisitId = req.params.id;
    try {
        const deletedVisit = await VisitModel.findByIdAndDelete(VisitId);
        if (!deletedVisit) {
            return res.status(404).json({ error: 'Visit not found' });
        }
        res.status(200).json(deletedVisit);
    } catch (error) {
        console.error('Error deleting Visit:', error);
        res.status(500).json({ error: 'Error deleting Visit' });
    }
}
async function getAllVisitsArchive(req, res) {
    try {
        const Visits = await VisitModel.find({ vtype: 'desactive'});
        res.status(200).json(Visits);
    } catch (error) {
        console.error('Error fetching Visits:', error);
        res.status(500).json({ error: 'Error fetching Visits' });
    }
}
async function getAllVisitsDaily(req, res) {
    const today = new Date();
    // Définir la date de début d'aujourd'hui à 00:00:00
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // Définir la date de fin d'aujourd'hui à 23:59:59
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    try {
        const Visits = await VisitModel.find({ vtype: 'active' ,
  
         checkin: {
            $gte: startOfDay,
            $lte: endOfDay
        } 
    
    });
        res.status(200).json(Visits);
    } catch (error) {
        console.error('Error fetching Visits:', error);
        res.status(500).json({ error: 'Error fetching Visits' });
    }
}

module.exports = {createVisit,getAllVisits, getVisitById,updateVisit,deleteVisit,getAllVisitsArchive,getAllVisitsDaily};