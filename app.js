const express = require('express');
const app = express();
const slashRouter = require('./routes/slashRoutes');
 
app.get('/', function (req, res) {
    console.log(req);
    console.log(res);
  res.send('Hello World')
})

app.post('/', function (req, res) {
    console.log(req);
    console.log(res);
  res.send('Hello World')
})

app.use('/', slashRouter);
 
app.listen(3000, () => {
    console.log('server is running!');
})

