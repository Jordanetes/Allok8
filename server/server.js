const express = require('express');
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');
const curlRouter = require('./routes/curlRouter.js');

const app = express();
const PORT = 3000;

// serving index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// statically serve '/dist' with approriate headers
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//parse incoming request body
app.use(bodyParser.json());


//route handlers
app.use('/server', curlRouter);

// getting mock data
app.get("/local", (req, res) => {
  architecture = fs.readFileSync(path.resolve(__dirname, "./clusterArchitecture.json"),"utf8");
  return res.status(200).json(architecture);
})


// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.message);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));