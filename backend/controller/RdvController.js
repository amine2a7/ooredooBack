const RdvModel = require('../model/RdvModel');

async function createRdv(req,res){
    try{
    console.log('data',req.body);
    const Rdv=new RdvModel(req.body)
   await Rdv.save();
   res.status(201).json(Rdv);
    }catch(err){
        res.status(400).send({error: err});
    }
  }

async function getAllRdvs(req, res) {
    try {
        const Rdvs = await RdvModel.find();
        res.status(200).json(Rdvs);
    } catch (error) {
        console.error('Error fetching Rdvs:', error);
        res.status(500).json({ error: 'Error fetching Rdvs' });
    }
}

async function getRdvById(req, res) {
    const RdvId = req.params.id;
    try {
        const Rdv = await RdvModel.findById(RdvId);
        if (!Rdv) {
            return res.status(404).json({ error: 'Rdv not found' });
        }
        res.status(200).json({ Rdv: Rdv });
    } catch (error) {
        console.error('Error fetching Rdv by ID:', error);
        res.status(500).json({ error: 'Error fetching Rdv' });
    }
}

async function updateRdv(req, res) {
    const RdvId = req.params.id;
    const updateData = req.body;
    console.log('Received update data:', updateData); // Vérifiez les données reçues du front-end
    try {
      const updatedRdv = await RdvModel.findByIdAndUpdate(RdvId, updateData, { new: true });
      console.log('Updated Rdv:', updatedRdv); // Vérifiez la Rdv mise à jour
      if (!updatedRdv) {
        return res.status(404).json({ error: 'Rdv not found' });
      }
      res.status(200).json(updatedRdv);
    } catch (error) {
      console.error('Error updating Rdv:', error);
      res.status(500).json({ error: 'Error updating Rdv' });
    }
  }

async function deleteRdv(req, res) {
    const RdvId = req.params.id;
    try {
        const deletedRdv = await RdvModel.findByIdAndDelete(RdvId);
        if (!deletedRdv) {
            return res.status(404).json({ error: 'Rdv not found' });
        }
        res.status(200).json(deletedRdv);
    } catch (error) {
        console.error('Error deleting Rdv:', error);
        res.status(500).json({ error: 'Error deleting Rdv' });
    }
}

module.exports = {createRdv,getAllRdvs, getRdvById,updateRdv,deleteRdv};