// Start the server

const express = require('express');
const app = express(); //
const connectDB = require('./config/db.js');
const colors = require('colors');

const router = require('./routes/restRoutes.js')


const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const morgan = require('morgan');


// Initialize OpenAI API client



// const Event = require('./model/event');

connectDB();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',router)

app.use(express.json({ limit: '50mb' }));

app.use(morgan('tiny'));
app.disable('x-powered-by');






require('dotenv').config();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});