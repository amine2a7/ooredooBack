const EmployeeModel = require('../model/EmployeeModel');

async function createEmployee(req,res){
    try{
    console.log('data',req.body);
    const Employee=new EmployeeModel(req.body)
   await Employee.save();
   res.status(201).json(Employee);
    }catch(err){
        res.status(400).send({error: err});
    }
  }

async function getAllEmployees(req, res) {
    try {
        const Employees = await EmployeeModel.find();
        res.status(200).json(Employees);
    } catch (error) {
        console.error('Error fetching Employees:', error);
        res.status(500).json({ error: 'Error fetching Employees' });
    }
}

async function getEmployeeById(req, res) {
    const EmployeeId = req.params.id;
    try {
        const Employee = await EmployeeModel.findById(EmployeeId);
        if (!Employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ Employee: Employee });
    } catch (error) {
        console.error('Error fetching Employee by ID:', error);
        res.status(500).json({ error: 'Error fetching Employee' });
    }
}

async function updateEmployee(req, res) {
    const EmployeeId = req.params.id;
    const updateData = req.body;
    console.log('Received update data:', updateData); // Vérifiez les données reçues du front-end
    try {
      const updatedEmployee = await EmployeeModel.findByIdAndUpdate(EmployeeId, updateData, { new: true });
      console.log('Updated Employee:', updatedEmployee); // Vérifiez la Employee mise à jour
      if (!updatedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error('Error updating Employee:', error);
      res.status(500).json({ error: 'Error updating Employee' });
    }
  }

async function deleteEmployee(req, res) {
    const EmployeeId = req.params.id;
    try {
        const deletedEmployee = await EmployeeModel.findByIdAndDelete(EmployeeId);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(deletedEmployee);
    } catch (error) {
        console.error('Error deleting Employee:', error);
        res.status(500).json({ error: 'Error deleting Employee' });
    }
}

module.exports = {createEmployee,getAllEmployees, getEmployeeById,updateEmployee,deleteEmployee};