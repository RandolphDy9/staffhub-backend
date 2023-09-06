const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/employeeModel');
const app = express();

app.use(express.json());

// routes
app.get('/employees', async(req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
})

app.get('/employee/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
})

app.post('/employee', async(req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch(error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
})

app.put('/employee/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body);
    if (!employee) {
      return res.status(404).json({ message: `Cannot find any product with id: ${id}`})
    }
    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
})

app.delete('/employee/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: `Cannot find any product with id: ${id}`})
    }
    res.status(200).json(employee);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:Testing12!@employeeapi.mff7xzt.mongodb.net/api?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on port 3000...')
  })
})
.catch((error) => {
  console.log(error)
})