const express = require('express');
const cors = require('cors');
const dispenserRouter = require('./routes/dispenser');
const db = require('./db/connect');
// connect to database
db;

const app = express();

// json parser
app.use(express.json());

// urlencoded parser
app.use(express.urlencoded({ extended: false }));

// cors

app.use(cors());

// routes
app.use('/dispenser', dispenserRouter);


// error handler
app.use((err, _req, res) => {
    res.status(500).json({ message: err.message });
});


app.listen(3000, () => console.log('Server Started'));
