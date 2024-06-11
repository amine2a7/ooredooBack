const VisitModel = require('../model/VisitModel');
const VisitorModel = require('../model/VisitorModel');
const Employee = require('../model/EmployeeModel');
const BadgeModel = require('../model/BadgeModel');

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


async function getAllVisitsDaily(req, res) {
    const today = new Date();
    // Définir la date de début d'aujourd'hui à 00:00:00
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // Définir la date de fin d'aujourd'hui à 23:59:59
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    try {
        const Visits = await VisitModel.find({
            $or: [
                {
                    checkin: {
                        $gte: startOfDay,
                        $lte: endOfDay
                    }
                },
                {
                    vtype: 'active'
                }
            ]
        });
        res.status(200).json(Visits);
    } catch (error) {
        console.error('Error fetching Visits:', error);
        res.status(500).json({ error: 'Error fetching Visits' });
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


async function addVisit(req, res) {
    try {
        const { nom, prenom, tel, cin, employee, badge } = req.body;

        // Create a new visitor
        const newVisitor = new VisitorModel({ nom, prenom, tel, cin });
        await newVisitor.save();
        console.log("employee", employee);
        console.log("badge", badge);

        // Create a new visit
        const newVisit = new VisitModel({
            visitor: newVisitor._id,
            employee: employee,
            badge: badge,
            checkin: new Date(), // Current date and time
            vtype: "active"
        });

        await newVisit.save();

        // Update the badge's availability
        await BadgeModel.findByIdAndUpdate(badge, { dispo: 1 });

        res.status(201).json({
            message: 'New visit added successfully',
            visit: newVisit
        });
    } catch (error) {
        console.error('Error adding new visit:', error);
        res.status(500).json({
            message: 'Error adding new visit',
            error: error.message
        });
    }
}

async function addBadgeE(req, res) {
    try {
        const {  employee, badge } = req.body;

        // Create a new visit
        const newVisit = new VisitModel({
            employee: employee,
            badge: badge,
            checkin: new Date(), // Current date and time
            vtype: "active"
        });

        await newVisit.save();

        // Update the badge's availability
        await BadgeModel.findByIdAndUpdate(badge, { dispo: 1 });

        res.status(201).json({
            message: 'New visit added successfully',
            visit: newVisit
        });
    } catch (error) {
        console.error('Error adding new visit:', error);
        res.status(500).json({
            message: 'Error adding new visit',
            error: error.message
        });
    }
}


module.exports = {createVisit,getAllVisits, getVisitById,updateVisit,deleteVisit,getAllVisitsArchive,getAllVisitsDaily,addVisit,addBadgeE};