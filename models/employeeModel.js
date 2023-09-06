const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    yearsOfExperience: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;