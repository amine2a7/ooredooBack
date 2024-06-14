const BadgeModel = require('../model/BadgeModel');
const VisitModel = require('../model/VisitModel');

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

async function getUnavailableVisitorBadges(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'visiteur' });
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableEmployeeBadges(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'employee' });
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableVisitorBadgeszenith1(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'visiteur',batiment: 'zenith1'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableEmployeeBadgeszenith1(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'employee' ,batiment: 'zenith1'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableVisitorBadgeszenith2(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'visiteur',batiment: 'zenith2'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableEmployeeBadgeszenith2(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'employee' ,batiment: 'zenith2'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableVisitorBadgescharguia(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'visiteur',batiment: 'charguia'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableEmployeeBadgescharguia(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'employee' ,batiment: 'charguia'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableVisitorBadgessfax(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'visiteur',batiment: 'sfax'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}

async function getUnavailableEmployeeBadgessfax(req, res) {
    try {
        const badges = await BadgeModel.find({ dispo: 0, type: 'employee' ,batiment: 'sfax'});
        res.status(200).json(badges);
    } catch (error) {
        console.error('Error fetching unavailable visitor badges:', error);
        res.status(500).json({ error: 'Error fetching unavailable visitor badges' });
    }
}
async function updateBadgeDispo(req, res) {
    const { id } = req.params; // Récupérer l'ID du badge de la requête
    const { id1 } = req.params;
    try {
      const updatedBadge = await BadgeModel.findByIdAndUpdate(id, { dispo: 0 });
      console.log('Updated Badge:', updatedBadge); // Vérifiez le badge mis à jour

      await VisitModel.findByIdAndUpdate(id1, { vtype: 'desactive' });

      await VisitModel.findByIdAndUpdate(id1, { checkout: new Date() });
      if (!updatedBadge) {
        return res.status(404).json({ error: 'Badge not found' });
      }
      res.status(200).json(updatedBadge);
    } catch (error) {
      console.error('Error updating Badge:', error);
      res.status(500).json({ error: 'Error updating Badge' });
    }
  }
  

module.exports = {
    createBadge,
    getAllBadges,
     getBadgeById,
     updateBadge,
     deleteBadge,
     getUnavailableVisitorBadges,
     getUnavailableEmployeeBadges,
     getUnavailableVisitorBadgeszenith1,
     getUnavailableVisitorBadgeszenith2,
     getUnavailableEmployeeBadgeszenith1,
     getUnavailableEmployeeBadgeszenith2,
     getUnavailableVisitorBadgescharguia,
     getUnavailableEmployeeBadgescharguia,
     getUnavailableVisitorBadgessfax,
     getUnavailableEmployeeBadgessfax,
     updateBadgeDispo};