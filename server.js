require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();
var cors = require('cors');

const MONGO_URL = process.env.MONGO_URL;
const PORT_URL = process.env.PORT_URL || 3000;

// var corsOption = {
//   origin: 'http://example.com',
//   optionSuccessStatus: 200
// }

app.use(cors());
app.use(express.json());

// middleware
app.use('/api/employee', employeeRoutes);

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT_URL, () => {
    console.log('Server is running on port 3000...')
  })
})
.catch((error) => {
  console.log(error)
})