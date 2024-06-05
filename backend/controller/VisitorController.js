const VisitorModel = require('../model/VisitorModel');

async function createVisitor(req,res){
    try{
    console.log('data',req.body);
    const Visitor=new VisitorModel(req.body)
   await Visitor.save();
   res.status(201).json(Visitor);
    }catch(err){
        res.status(400).send({error: err});
    }
  }

async function getAllVisitors(req, res) {
    try {
        const Visitors = await VisitorModel.find();
        res.status(200).json(Visitors);
    } catch (error) {
        console.error('Error fetching Visitors:', error);
        res.status(500).json({ error: 'Error fetching Visitors' });
    }
}

async function getVisitorById(req, res) {
    const VisitorId = req.params.id;
    try {
        const Visitor = await VisitorModel.findById(VisitorId);
        if (!Visitor) {
            return res.status(404).json({ error: 'Visitor not found' });
        }
        res.status(200).json({ Visitor: Visitor });
    } catch (error) {
        console.error('Error fetching Visitor by ID:', error);
        res.status(500).json({ error: 'Error fetching Visitor' });
    }
}

async function updateVisitor(req, res) {
    const VisitorId = req.params.id;
    const updateData = req.body;
    console.log('Received update data:', updateData); // Vérifiez les données reçues du front-end
    try {
      const updatedVisitor = await VisitorModel.findByIdAndUpdate(VisitorId, updateData, { new: true });
      console.log('Updated Visitor:', updatedVisitor); // Vérifiez la Visitor mise à jour
      if (!updatedVisitor) {
        return res.status(404).json({ error: 'Visitor not found' });
      }
      res.status(200).json(updatedVisitor);
    } catch (error) {
      console.error('Error updating Visitor:', error);
      res.status(500).json({ error: 'Error updating Visitor' });
    }
  }

async function deleteVisitor(req, res) {
    const VisitorId = req.params.id;
    try {
        const deletedVisitor = await VisitorModel.findByIdAndDelete(VisitorId);
        if (!deletedVisitor) {
            return res.status(404).json({ error: 'Visitor not found' });
        }
        res.status(200).json(deletedVisitor);
    } catch (error) {
        console.error('Error deleting Visitor:', error);
        res.status(500).json({ error: 'Error deleting Visitor' });
    }
}

module.exports = {createVisitor,getAllVisitors, getVisitorById,updateVisitor,deleteVisitor};