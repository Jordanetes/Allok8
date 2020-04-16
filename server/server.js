const express = require('express');

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');
const curlRouter = require('./routes/curlRouter.js');
const fetch = require("node-fetch");

// statically serve everything in the dist folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get("/test", (req, res) => {
  console.log("hello");
  return res.status(200).json({"hi": "there"});
})
//parse incoming request body
app.use(bodyParser.json());


// root, send index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});


//route handlers
app.use('/server', curlRouter);

setInterval(() => {
  fetch("http://localhost:3000/server/dev")
  .then(result => result.json())
  .then(json => console.log(json))
}, 60000);


// // catch-all route handler for any requests to an unknown route
// app.get('*', (req, res) => {
//   console.log(res.status);
//   return res.status(404).json('Page not found');
// });

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