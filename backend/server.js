// Start the server

const express = require('express');
const app = express(); //
const connectDB = require('./config/db.js');
const colors = require('colors');

const router = require('./routes/restRoutes.js');
const badge = require('./routes/Badge.js');
const employee = require('./routes/Employee.js');
const Visit = require('./routes/Visit.js');
const Visitor = require('./routes/Visitor.js');





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

app.use('/api',router);
app.use('/badge',badge);
app.use('/employee',employee);
app.use('/visit',Visit);
app.use('/visitor',Visitor);


app.use(express.json({ limit: '50mb' }));

app.use(morgan('tiny'));
app.disable('x-powered-by');






require('dotenv').config();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



//////////////////
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, '172.19.3.96', () => {
//   console.log(`Server is running on http://172.19.3.96:${port}`);
// });
// //////////////////////