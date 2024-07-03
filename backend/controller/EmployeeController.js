const EmployeeModel = require('../model/EmployeeModel');
const ExcelJS = require('exceljs');
const fs = require('fs');
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



async function regenereEmployee(req, res) {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(file.path);
        const worksheet = workbook.getWorksheet(1);

        const newEmployees = [];

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return;

            const employee = {
                matricule: row.getCell(1).value,
                nom: row.getCell(2).value,
               prenom : row.getCell(3).value,
                tel : row.getCell(5).value,
                direction : row.getCell(4).value,
                // Ajouter d'autres champs si nécessaire
            };

            const { matricule, nom  , prenom ,tel ,direction } = employee;
            newEmployees.push({ matricule, nom ,  prenom ,tel , direction });
        });

        await EmployeeModel.deleteMany({});
        await EmployeeModel.insertMany(newEmployees);

        // Supprimer le fichier après traitement
        fs.unlinkSync(file.path);

        res.status(200).json({ message: 'Employees regenerated successfully', newEmployees });
    } catch (error) {
        console.error('Error regenerating employees:', error);
        res.status(500).json({ error: 'Error regenerating employees' });
    }
}

///////////

/////////////
module.exports = {createEmployee,getAllEmployees, getEmployeeById,updateEmployee,deleteEmployee,regenereEmployee};