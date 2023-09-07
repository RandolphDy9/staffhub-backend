const Employee = require('../models/employeeModel');
const asyncHandler = require('express-async-handler');

const getEmployees = asyncHandler(async(req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch(error) {
    res.status(500);
    throw new Error(error.message)
  }
})

const getEmployee = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch(error) {
    res.status(500);
    throw new Error(error.message)
  }
})

const addEmployee = asyncHandler(async(req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch(error) {
    res.status(500);
    throw new Error(error.message)
  }
})

const updateEmployee = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body);
    if (!employee) {
      res.status(404);
      throw new Error(`Cannot find any product with id: ${id}`);
    }
    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch(error) {
    res.status(500);
    throw new Error(error.message)
  }
})

const deleteEmployee = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      res.status(404);
      throw new Error(`Cannot find any product with id: ${id}`);
    }
    res.status(200).json(employee);
  } catch(error) {
    res.status(500);
    throw new Error(error.message)
  }
})

module.exports = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee
}