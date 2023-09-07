const express = require('express')
const router = express.Router();
const { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');

// routes
router.get('/', getEmployees)
router.get('/:id', getEmployee)
router.post('/', addEmployee)
router.put('/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee)

module.exports = router;