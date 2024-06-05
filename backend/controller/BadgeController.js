const BadgeModel = require('../model/BadgeModel');

async function createBadge(req,res){
    try{
    console.log('data',req.body);
    const Badge=new BadgeModel(req.body)
   await Badge.save();
   res.status(201).json(Badge);
    }catch(err){
        res.status(400).send({error: err});
    }
  }

async function getAllBadges(req, res) {
    try {
        const Badges = await BadgeModel.find();
        res.status(200).json(Badges);
    } catch (error) {
        console.error('Error fetching Badges:', error);
        res.status(500).json({ error: 'Error fetching Badges' });
    }
}

async function getBadgeById(req, res) {
    const BadgeId = req.params.id;
    try {
        const Badge = await BadgeModel.findById(BadgeId);
        if (!Badge) {
            return res.status(404).json({ error: 'Badge not found' });
        }
        res.status(200).json({ Badge: Badge });
    } catch (error) {
        console.error('Error fetching Badge by ID:', error);
        res.status(500).json({ error: 'Error fetching Badge' });
    }
}

async function updateBadge(req, res) {
    const BadgeId = req.params.id;
    const updateData = req.body;
    console.log('Received update data:', updateData); // Vérifiez les données reçues du front-end
    try {
      const updatedBadge = await BadgeModel.findByIdAndUpdate(BadgeId, updateData, { new: true });
      console.log('Updated Badge:', updatedBadge); // Vérifiez la Badge mise à jour
      if (!updatedBadge) {
        return res.status(404).json({ error: 'Badge not found' });
      }
      res.status(200).json(updatedBadge);
    } catch (error) {
      console.error('Error updating Badge:', error);
      res.status(500).json({ error: 'Error updating Badge' });
    }
  }

async function deleteBadge(req, res) {
    const BadgeId = req.params.id;
    try {
        const deletedBadge = await BadgeModel.findByIdAndDelete(BadgeId);
        if (!deletedBadge) {
            return res.status(404).json({ error: 'Badge not found' });
        }
        res.status(200).json(deletedBadge);
    } catch (error) {
        console.error('Error deleting Badge:', error);
        res.status(500).json({ error: 'Error deleting Badge' });
    }
}

module.exports = {createBadge,getAllBadges, getBadgeById,updateBadge,deleteBadge};